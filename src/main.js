import Vue from 'vue'
import App from './App.vue'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(Bootstrap);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
