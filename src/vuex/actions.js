/**
 *  Class: actions
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description:
 */
import types from './mutation-types';
export const reAsiAction = function ({ dispatch }) {
  dispatch(types.REASI)
};

export const addOptionAction = function ({ dispatch }, item) {
  dispatch(types.ADD_OPTION, item);
};

//export default {reAsiAction, addOptionAction};