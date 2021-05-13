export default function ({ redirect, $auth }) {
  const token = $auth.getToken('local')

  if (token) {
    return redirect('/')
  }
}
