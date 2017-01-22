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

import Article from './components/article';
import Stat from './components/stat';
import Link from './components/link';
import EditArticle from './components/editArticle';


const routes = [
  { path: "/login", component: Login},
  { path: "/index", component: Index,
    children: [
      {path: '', component: Article}, //默认
      {path: '/article', component: Article},
      {path: '/stat', component: Stat},
      {path: '/link', component: Link},
      {path: '/editArticle', component: EditArticle}
    ]
  },
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
