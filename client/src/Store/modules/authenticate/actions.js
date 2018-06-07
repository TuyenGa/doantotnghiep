import axios from 'axios';

export default {
  async getInfo({ commit }, id) {
    const res = await axios.get(`http://localhost:10005/users/${id}/detail`);
    commit('GET_INFO', res.data.getInfoUser);
  },
};
