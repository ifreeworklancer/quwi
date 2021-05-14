<template>
  <el-form ref="formLogin" :model="formData" :rules="formRules" class="form">
    <div class="form-body">
      <el-form-item label="User name" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
    </div>
    <div class="form-footer">
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
        client_id: this.$config.client_id,
        client_secret: this.$config.client_secret,
        grant_type: this.$config.grant_type,
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
        if (!valid) {
          this.isLoading = false
          return
        }
        this.userLogin(this.formData)
          .then(({ data }) => {
            this.$auth.setToken('local', data.access_token)
            this.$auth.setRefreshToken('local', data.refresh_token)
          })
          .catch(() => {
            this.$message({
              type: 'error',
              message: 'Oops, something went wrong!',
              duration: 5000,
            })
          })
          .finally(() => (this.isLoading = false))
      })
    },
  },
}
</script>
