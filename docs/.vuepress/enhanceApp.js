import addRoutes from './theme/router'
export default ({
  Vue,
  router,
  options,
  siteData
}) => {
  // ...做一些其他的应用级别的优化
  addRoutes(router)
  router.beforeEach((to, from, next) => {
    console.log(from, to)
    next()
  })
}