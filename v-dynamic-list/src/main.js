import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios';
Vue.prototype.$axios = axios;

import _ from 'lodash';
Vue.prototype._ = _;

new Vue({
  render: h => h(App),
}).$mount('#app')
// import List from './components/List.vue';
// export default List;