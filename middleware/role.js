const stopPaths = path => {
  const stops = ['profile', 'file-manager', 'chat']
  return path.split('/').some(p => stops.includes(p))
}

export default function({ redirect, store, route }) {
  if (
    store.getters['api/checkUserRole']('profile') &&
    !stopPaths(route.fullPath)
  ) {
    redirect('/contacts/profile')
  }
}
