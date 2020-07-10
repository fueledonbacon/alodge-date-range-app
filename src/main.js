import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const dateRangeApp = new Vue({
  render: h => h(App),
})

if(document.getElementById('date-range-app')){
  dateRangeApp.$mount('#date-range-app')
}
