import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAsyncData from 'vue-async-data';
import VueResource from 'vue-resource';
import App from './app.vue';
import routerMap from './router';
import store from './vuex/store';


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueAsyncData);


// filter
import filter from './filter';

Object.keys(filter).forEach(function(k) {
  Vue.filter(k, filter[k]);
});

//directive
import directive from './directive';

Object.keys(directive).forEach(function(k) {
  Vue.directive(k, directive[k]);
});


const router = new VueRouter();

routerMap(router);
App.store = store;
router.start(App, 'app');
