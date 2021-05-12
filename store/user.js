export const actions = {
  login({ commit }, data) {
    return this.$auth.loginWith('local', {
      data,
    })
  },
}
