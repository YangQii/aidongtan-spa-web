/**
 * yangqi by 2018/02/12
 */

import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import iView from 'iview';
import App from './App';
import router from './router';
import resource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(resource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
