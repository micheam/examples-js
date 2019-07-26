import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: "#app",
  render: h => h(App)
});
