import Vue from 'vue'
import App from './App.vue'
// package.jsonのパッケージ名を指定している
import MyButton from '@mylibrary/my-button';

Vue.config.productionTip = false
Vue.component('my-button', MyButton);
new Vue({
  render: h => h(App),
}).$mount('#app')
