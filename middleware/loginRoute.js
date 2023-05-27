const isUnloginedPages = route =>
  ['register', 'login', 'recoverpwd', 'logout'].reduce(
    (acc, name) => acc + route.fullPath.includes(name),
    0
  )

export default function({ redirect, store, route }) {
  console.log(store)
  if (store.getters['api/getIsAuth'] && isUnloginedPages(route)) {
    redirect('/dashboard')
  }
}
