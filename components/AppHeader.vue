<template>
  <header class="app-header">
    <div class="container">
      <el-row class="app-header-row">
        <el-col style="width: auto">
          <NuxtLink to="/" class="app-header_logo">Logo</NuxtLink>
        </el-col>
        <el-col style="width: auto">
          <ProfileController />
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #dcdfe6;

  @media (min-width: 992px) {
    padding: 15px 0;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before,
    &::after {
      content: '';
      display: none;
    }

    .el-col {
      float: none;
    }
  }

  &_logo {
    color: #909399;
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      color: lighten(#909399, 15%);
    }
  }
}
</style>
