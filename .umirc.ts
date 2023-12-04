import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@YangChengxxyy',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: '登陆',
      component: './Login',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
  ],
  npmClient: 'pnpm',
});
