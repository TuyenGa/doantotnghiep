// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import 'vuetify/dist/vuetify.min.css';
import './assets/stylesheets/normalize.css';
import App from './App';
import router from './router';

Vue.use(Vuetify, {
  theme: {
    primary: '#20c063',
    background: '#10A75F',
    footercolor: '#474e52',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
