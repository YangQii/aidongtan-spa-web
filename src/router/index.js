import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: 'signup',
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
      path: 'login',
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
  ],
});

export default router;
