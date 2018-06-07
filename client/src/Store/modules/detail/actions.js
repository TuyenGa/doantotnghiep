import axios from 'axios';

export default {
  async getListDetail({ commit }, reqData) {
    reqData = { //eslint-disable-line
      cateType: reqData.cateType || '',
      priceMin: reqData.priceMin || '',
      priceMax: reqData.priceMax || '',
      coop: reqData.coop || '',
      address: reqData.address || '',
    };
    const res = await axios.get(`http://localhost:10005/search?cateType=${reqData.cateType}&address=${reqData.address}&priceMin=${reqData.priceMin}&priceMax=${reqData.priceMax}&coop=${reqData.coop}`);
    commit('GET_LIST_DETAIL', res.data.listData);
  },
};
