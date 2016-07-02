/**
 *  Class: actions
 *  Author: Niu Xiaoyu
 *  Date: 16/7/2.
 *  Description:
 */
export const reAsiAction = function ({ dispatch }) {
  dispatch('REASI')
};

export const addOptionAction = function ({ dispatch, item }) {
  dispatch('ADDOPTION', item);
};

//export default {reAsiAction, addOptionAction};