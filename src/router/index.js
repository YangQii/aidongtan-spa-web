import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/signup',
      name: 'userSignUp',
      component(resolve) {
        require.ensure(['../views/PageSignUp.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageSignUp.vue'));
        });
      },
      meta: {
        title: '用户注册',
      },
    },
    {
      path: '/login',
      name: 'userLogIn',
      component(resolve) {
        require.ensure(['../views/PageSignIn.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageSignIn.vue'));
        });
      },
      meta: {
        title: '用户登陆',
      },
    },
    {
      path: '/overview',
      name: 'overview',
      component(resolve) {
        require.ensure(['../views/PageOverview.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageOverview.vue'));
        });
      },
      meta: {
        title: '总览',
      },
    },
    {
      path: '/index',
      name: 'index',
      component(resolve) {
        require.ensure(['../views/PageIndex.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageIndex.vue'));
        });
      },
      meta: {
        title: '主页',
      },
    },
    {
      path: '/place',
      name: 'place',
      component(resolve) {
        require.ensure(['../views/PagePlace.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PagePlace.vue'));
        });
      },
      meta: {
        title: '场馆',
      },
    },
    {
      path: '/activity',
      name: 'activity',
      component(resolve) {
        require.ensure(['../views/PageActivity.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageActivity.vue'));
        });
      },
      meta: {
        title: '活动',
      },
    },
    {
      path: '/funding',
      name: 'funding',
      component(resolve) {
        require.ensure(['../views/PageFunding.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageFunding.vue'));
        });
      },
      meta: {
        title: '资金',
      },
    },
    {
      path: '/setting',
      name: 'setting',
      component(resolve) {
        require.ensure(['../views/PageSetting.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageSetting.vue'));
        });
      },
      meta: {
        title: '设置',
      },
    },
  ],
});

export default router;
