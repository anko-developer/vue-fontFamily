import Vue from 'vue';
import VueRouter from 'vue-router';
import FontView from '../views/FontView';

Vue.use(VueRouter);

export const router = new VueRouter({  
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FontView,
    },
    {
      path: '/fonts',
      component: FontView,
    }
  ]
});