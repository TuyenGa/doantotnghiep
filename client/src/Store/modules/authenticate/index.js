import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;

const state = {
  info: null,
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
