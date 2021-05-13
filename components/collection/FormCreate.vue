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
      <el-button type="primary" :loading="isLoading"> Create </el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      formData: {
        title: '',
        description: '',
      },
      formRules: {
        username: [
          {
            required: true,
            message: 'Please input Title',
            trigger: 'change',
          },
        ],
      },
    }
  },
}
</script>
