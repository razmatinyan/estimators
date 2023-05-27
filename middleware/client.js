export default function({ redirect, store, route }) {
  if (
    store.getters['api/checkUserRole']('client') &&
    !route.fullPath.endsWith('-client')
  ) {
    redirect(route.fullPath + '-client')
  }
  if (
    store.getters['api/checkUserRole']('profile') &&
    route.fullPath.endsWith('-client')
  ) {
    redirect(route.fullPath.replace('-client', ''))
  }
}
