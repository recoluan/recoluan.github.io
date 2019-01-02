const categoryRoute = {
  path: '/categories',
  component: () => import('../pages/Categories')
}

const tagRoute = {
  path: '/tags',
  component: () => import('../pages/Tags')
}

export function addCategories (router) {
  router.addRoutes(categoryRoute)
}

export function addTags (router) {
  router.addRoutes(tagRoute)
}

export default function addRoutes (router) {
  const routers = [].concat(categoryRoute, tagRoute)
  router.addRoutes(routers)
}