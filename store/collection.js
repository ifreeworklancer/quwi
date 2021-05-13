export const actions = {
  async create({ commit }, data) {
    return await this.$axios.post('/userarea/movies/collections', data)
  },
}
