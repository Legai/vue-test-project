import Vue from 'vue';
import Vuex from 'vuex';

import Sugar from 'sugar';

import App from './components/App';
import index from './store';
import router from './routes';
import user from './store/user';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  ...index,
  modules: {
    user
  }
});

Sugar.extend();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
