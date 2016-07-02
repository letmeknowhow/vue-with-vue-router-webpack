/**
 *  Class: middleware
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description: vuex中间件,每个mutation被触发后都会执行
 */

import { STORAGE_KEY } from '../constants';


const localStorageMiddleware = {
  onMutation (mutation, nextState, prevState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState.meals.options));
  }
};

export default [localStorageMiddleware];
