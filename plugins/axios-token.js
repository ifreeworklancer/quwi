export default function ({ $axios, $auth }) {
  $axios.onRequest((config) => {
    const token = $auth.getToken('local')
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
  })
}
