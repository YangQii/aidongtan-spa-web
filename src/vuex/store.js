import Vue from 'vue';
import Vuex from 'vuex';
import * as type from './types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: '',
    title: '',
  },
  mutations: {
    [type.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [type.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null
    },
    [type.TITLE]: (state, data) => {
      state.title = data;
    },
  },
})
