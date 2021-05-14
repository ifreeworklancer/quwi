<template>
  <el-form
    ref="formCollectionCreate"
    :model="formData"
    :rules="formRules"
    class="form"
  >
    <div class="form-body">
      <el-form-item label="Title" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input
          v-model="formData.description"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8 }"
        >
        </el-input>
      </el-form-item>
    </div>
    <div class="form-footer">
      <el-button type="primary" :loading="isLoading" @click.prevent="sendForm">
        Submit
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
        title: '',
        description: '',
      },
      formRules: {
        title: [
          {
            required: true,
            message: 'Please input Title',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    ...mapActions({ createCollection: 'collection/create' }),
    sendForm() {
      this.isLoading = true
      this.$refs.formCollectionCreate.validate((valid) => {
        if (!valid) {
          this.isLoading = false
          return
        }
        this.createCollection(this.formData)
          .then(() => {
            this.resetFormData()
            this.$notify({
              title: 'Success',
              message: 'Collection created successful',
              type: 'success',
            })
          })
          .catch(({ response }) => {
            this.handleError(response)
          })
          .finally(() => (this.isLoading = false))
      })
    },
    resetFormData() {
      this.$refs.formCollectionCreate.resetFields()
    },
    handleError(response) {
      const errors =
        response && response.data.errors
          ? response && response.data?.errors
          : []
      if (errors && errors.length) {
        errors.forEach((item) => {
          this.$message({
            type: 'error',
            message: item.message,
            duration: 5000,
          })
        })
      } else {
        this.$message({
          type: 'error',
          message: 'Oops, something went wrong!',
          duration: 5000,
        })
      }
    },
  },
}
</script>
