import addRoutes from './theme/router'
import Router from 'vue-router'
export default ({
  router
}) => {
  console.log(222, router)
  // ...做一些其他的应用级别的优化
  addRoutes(router)
  router = new Router({
    mode: 'hash',
    routes: router.options.routes
  })
  // addRoutes(router)
}