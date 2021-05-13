export default function ({ $axios, $auth }) {
  $axios.onRequest((config) => {
    const isLoggedIn = $auth.loggedIn
    const token = $auth.getToken('local')
    if (isLoggedIn) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
  })
}
