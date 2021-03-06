import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: '/signup',
    //   name: 'userSignUp',
    //   component(resolve) {
    //     require.ensure(['../views/PageSignUp.vue'], () => {
    //       // eslint-disable-next-line
    //       resolve(require('../views/PageSignUp.vue'));
    //     });
    //   },
    //   meta: {
    //     title: '用户注册',
    //   },
    // },
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
        requireAuth: true,
      },
    },
    {
      path: '/index',
      name: 'index',
      redirect: { name: 'check' },
      component(resolve) {
        require.ensure(['../views/PageIndex.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageIndex.vue'));
        });
      },
      meta: {
        title: '主页',
      },
      children: [
        {
          path: '/index/check',
          name: 'check',
          component(resolve) {
            require.ensure(['../views/PageIndexInfo.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageIndexInfo.vue'));
            });
          },
          meta: {
            title: '审核',
          },
        },
        {
          path: '/index/yimember',
          name: 'yimember',
          component(resolve) {
            require.ensure(['../views/PageIndexYi.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageIndexYi.vue'));
            });
          },
          meta: {
            title: '一卡通会员',
          },
        },
        {
          path: '/index/tumember',
          name: 'tumember',
          component(resolve) {
            require.ensure(['../views/PageIndexInfoTuan.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageIndexInfoTuan.vue'));
            });
          },
          meta: {
            title: '团购',
          },
        },
        {
          path: '/index/noalive',
          name: 'noalive',
          component(resolve) {
            require.ensure(['../views/PageIndexInfoWei.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageIndexInfoWei.vue'));
            });
          },
          meta: {
            title: '未激活',
          },
        }
      ]
    },
    {
      path: '/place',
      name: 'place',
      redirect: { name: 'placeinfo' },
      component(resolve) {
        require.ensure(['../views/PagePlace.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PagePlace.vue'));
        });
      },
      meta: {
        title: '场馆',
      },
      children:[
        {
          path: '/place/info',
          name: 'placeinfo',
          component(resolve) {
            require.ensure(['../views/PagePlaceInfo.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PagePlaceInfo.vue'));
            });
          },
          meta: {
            title: '场馆信息',
          },
        },
        {
          path: '/place/eqment',
          name: 'placeeqment',
          component(resolve) {
            require.ensure(['../views/PagePlaceEq.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PagePlaceEq.vue'));
            });
          },
          meta: {
            title: '设备信息',
          },
        },
      ]
    },
    {
      path: '/activity',
      name: 'activity',
      redirect: { name: 'activitymember' },
      component(resolve) {
        require.ensure(['../views/PageActivity.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageActivity.vue'));
        });
      },
      meta: {
        title: '活动',
      },
      children: [
        {
          path: '/activity/member',
          name: 'activitymember',
          component(resolve) {
            require.ensure(['../views/PageActivityMember.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageActivityMember.vue'));
            });
          },
          meta: {
            title: '团购信息',
          },
        },
        {
          path: '/activity/yi',
          name: 'activityyi',
          component(resolve) {
            require.ensure(['../views/PageActivityYi.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageActivityYi.vue'));
            });
          },
          meta: {
            title: '一卡通管理',
          },
        },
      ]
    },
    {
      path: '/funding',
      name: 'funding',
      redirect: { name: 'fundinginfo' },
      component(resolve) {
        require.ensure(['../views/PageFunding.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageFunding.vue'));
        });
      },
      meta: {
        title: '资金',
      },
      children:[
        {
          path: '/funding/info',
          name: 'fundinginfo',
          component(resolve) {
            require.ensure(['../views/PageFundingInfo.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageFundingInfo.vue'));
            });
          },
          meta: {
            title: '资金账户',
          },
        },
        {
          path: '/funding/record',
          name: 'fundingrecord',
          component(resolve) {
            require.ensure(['../views/PageFundingRecord.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageFundingRecord.vue'));
            });
          },
          meta: {
            title: '收益记录',
          },
        },
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      redirect: { name: 'settinginfo' },
      component(resolve) {
        require.ensure(['../views/PageSetting.vue'], () => {
          // eslint-disable-next-line
          resolve(require('../views/PageSetting.vue'));
        });
      },
      meta: {
        title: '设置',
      },
      children: [
        {
          path: '/setting/info',
          name: 'settinginfo',
          component(resolve) {
            require.ensure(['../views/PageSettingInfo.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageSettingInfo.vue'));
            });
          },
          meta: {
            title: '权限设置',
          }
        },
        {
          path: '/setting/reset',
          name: 'settingreset',
          component(resolve) {
            require.ensure(['../views/PageSettingReset.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageSettingReset.vue'));
            });
          },
          meta: {
            title: '权限分配',
          }
        },
        {
          path: '/setting/user',
          name: 'settinguser',
          component(resolve) {
            require.ensure(['../views/PageSettingUser.vue'], () => {
              // eslint-disable-next-line
              resolve(require('../views/PageSettingUser.vue'));
            });
          },
          meta: {
            title: '密码修改',
          }
        },
      ]
    },
  ],
});
// router 判断
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth){
//     if (Vuex.Store.state.auth.token){
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath },
//       })
//     }
//   }
// });

export default router;
