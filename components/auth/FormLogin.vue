<template>
  <el-form
    ref="formLogin"
    :model="formData"
    :rules="formRules"
    class="form-auth"
  >
    <div class="form-auth-body">
      <el-form-item label="User name" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
    </div>
    <div class="form-auth-footer">
      <el-button type="primary" :loading="isLoading" @click.prevent="sendForm">
        Login
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isLoading: false,
      formData: {
        username: '',
        password: '',
        client_id: 'frontend_app',
        client_secret: 'secret',
        grant_type: 'password',
      },
      formRules: {
        username: [
          {
            required: true,
            message: 'Please input User name',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input Password',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    ...mapActions({ userLogin: 'user/login' }),
    sendForm() {
      this.isLoading = true
      this.$refs.formLogin.validate((valid) => {
        if (valid) {
          this.userLogin(this.formData)
            .then(({ data }) => {
              this.$auth.setToken('local', data.access_token)
              this.$auth.setRefreshToken('local', data.refresh_token)
              this.$router.push('/')
              this.isLoading = false
            })
            .catch(() => {
              this.$message({
                type: 'error',
                message: 'Oops, something went wrong!',
                duration: 5000,
              })
              this.isLoading = false
            })
        } else {
          this.isLoading = false
        }
      })
    },
  },
}
</script>

<style lang="scss">
.form-auth {
  .el-form-item {
    margin-bottom: 15px;

    &__label {
      width: 100%;
      text-align: left;
    }

    &__content {
      margin-left: 0;
    }
  }

  &-body {
    margin-bottom: 35px;
  }
}
</style>
