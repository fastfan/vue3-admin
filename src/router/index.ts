/*
 * @Author: fastfan
 * @Date: 2025-02-06 22:25:07
 * @LastEditors: fastfan
 * @LastEditTime: 2025-02-06 22:26:23
 * @Description: your description
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 配置路由
const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {},
  children: [],
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next()
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;