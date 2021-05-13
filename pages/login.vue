<template>
  <section class="section section--full-height section--center">
    <div class="container">
      <el-row>
        <el-col :span="24">
          <h1 class="page-title">Login</h1>
        </el-col>
        <el-col :span="10" :xs="24" :sm="16" :lg="12" :xl="10">
          <AuthFormLogin />
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  auth: 'guest',
}
</script>
