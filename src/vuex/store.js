/**
 *  Class: store
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  options: [],
  selected: {
    'title': '三食堂',
    'img': '../assets/img/test3.jpg',
    'color': 'rgba(173, 171, 163, 0.7)'
  },
};

const mutations = {
  REASI (state) {
    const lists = JSON.parse(localStorage.lists);
    const cc = Math.round(Math.random() * (lists.length - 1));
    state.selected = lists[cc];
  },
  ADDOPTION (state, newItem) {
    newItem.id = state.options.length;
    state.options.push(newItem);
  }
};

export default new Vuex.Store({
  state,
  mutations
});