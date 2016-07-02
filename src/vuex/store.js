/**
 *  Class: store
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';
import meals from './modules/meals';
import myMiddleware from './middlewares'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    meals,
    //...other modules
  },
  middlewares: process.env.NODE_ENV !== 'production' ? myMiddleware : myMiddleware,
  strict: process.env.NODE_ENV !== 'production'
});