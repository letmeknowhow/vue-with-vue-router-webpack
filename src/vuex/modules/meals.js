/**
 *  Class: meals
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description: 订餐模块
 */
import types from '../mutation-types';
import {STORAGE_KEY} from '../../constants';

const state = {
  options: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  selected: {
    'title': '三食堂',
    'img': '../assets/img/test3.jpg',
    'color': 'rgba(173, 171, 163, 0.7)'
  },
};

const mutations = {
  [types.REASI] (state) {
    const lists = state.options;
    const cc = Math.round(Math.random() * (lists.length - 1));
    state.selected = lists[cc];
  },
  [types.ADD_OPTION] (state, newItem) {
    newItem.id = state.options.length;
    state.options.push(newItem);
  }
};

export default {
  state,
  mutations
};