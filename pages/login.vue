<template>
  <section class="auth">
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
  middleware: 'login',
}
</script>

<style lang="scss">
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .page-title {
    text-align: center;
  }

  .el-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
