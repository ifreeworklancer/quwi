<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span> <el-button icon="el-icon-user" circle></el-button></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-if="$auth.loggedIn" command="logout">
        Logout
      </el-dropdown-item>
      <el-dropdown-item v-else command="login"> Login </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    async login() {
      await this.$router.push('/login')
    },
    handleCommand(method) {
      this[method]()
    },
  },
}
</script>
