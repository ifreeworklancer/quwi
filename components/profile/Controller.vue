<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span> <el-button icon="el-icon-user" circle></el-button></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="logout">Logout</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    },
    handleCommand(method) {
      this[method]()
    },
  },
}
</script>
