<template>
  <section class="auth">
    <div class="container">
      <el-row>
        <el-col :gutter="15" :span="24">
          <h1 class="page-title">Login</h1>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {}
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
}
</style>
