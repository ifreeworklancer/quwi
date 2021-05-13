export const actions = {
  async login({ commit }, data) {
    return await this.$auth.loginWith('local', {
      data,
    })
  },
}
