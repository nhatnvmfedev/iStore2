// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import _ from 'lodash'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHeart, faHeartBroken, faCartPlus, faStar, faTrashAlt, faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import Notifications from 'vue-notification'

library.add(faUserSecret, faHeart, faHeartBroken, faCartPlus, faStar, faTrashAlt, faUser, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter, Vuex, axios)
Vue.use(Notifications)
Vue.prototype._ = _

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
