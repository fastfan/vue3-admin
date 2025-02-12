import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置路由
// const routes: Array<RouteRecordRaw> = [{
//   path: '/',
//   name: 'Home',
//   component: () => import('@/views/home/index.vue'),
//   meta: {},
//   children: [],
// }];

export const aboutRouter = {
  path: '/about',
  name: 'about',
  component: () => import('@/views/about/index.vue'),
  meta: {},
  children: []
} as RouteRecordRaw

// 组合路由信息
// import.meta.glob 为 vite 提供的特殊导入方式
// 它可以将模块中全部内容导入并返回一个Record对象
// 默认为懒加载模式 加入配置项 eager 取消懒加载
const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
  eager: true
})
// 配置路由
const routes: Array<RouteRecordRaw> = []
Object.keys(modules).forEach((key) => {
  // console.log(key);
  // console.log(modules[key].default);
  const module = modules[key].default
  routes.push(module)
})
routes.push(aboutRouter)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const noStatusPage = ['/login', '/about']
router.beforeEach(async (_to, _from, next) => {
  NProgress.start()
  const token = sessionStorage.getItem('userInfo')
  const userIsLogin = !!token
  if (userIsLogin || noStatusPage.includes(_to.path)) {
    next()
  } else {
    next('/login')
  }
})

router.afterEach((_to) => {
  // console.log(_to)
  NProgress.done()
})

export default router
