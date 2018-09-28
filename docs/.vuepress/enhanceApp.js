import Router from 'vue-router'
const routes = [
  {
    path: 'abcss',
    component: () => import('../components/tags/index.vue'),
    name: 'tags',
    meta: { title: '授信额度查询' }
  }
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
}