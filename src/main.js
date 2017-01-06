// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import cookie from 'cookie_js';

import Login from './components/login';
import Index from './components/index';


const routes = [
  { path: "/login", component: Login},
  { path: "/index", component: Index },
  { path: "/", redirect: '/login'}
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
