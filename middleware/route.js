export default function({ redirect, store }) {
  if (!store.getters['api/getIsAuth']) {
    redirect('/auth/login')
  }
}
