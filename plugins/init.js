export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((_, __, next) => {
    app.store.dispatch('api/init')
    next()
  })
}
