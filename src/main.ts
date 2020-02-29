import Vue from 'vue';
import App from '@/App.vue';
import appRooter from '@/router';
import store from '@/store';
import 'vue-class-component/hooks';

Vue.config.productionTip = false;

new Vue({
  router: appRooter,
  store,
  render: h => h(App),
}).$mount('#app');
