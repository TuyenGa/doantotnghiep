import Vue from 'vue';
import Vuex from 'vuex';
import account from './modules/authenticate/index';
import detail from './modules/detail/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    detail,
  },
});
