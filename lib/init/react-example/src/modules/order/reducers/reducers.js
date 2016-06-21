/**
 * @file: 订单管理 reducer
 * @author：wangshiying@zufangit.cn
 */

import * as types from './../actions/actionTypes';
import Msg from './../../../common/util/message.js';

// 初始值
const initState = {
    orderObj: {orderList: [], totalCount: 1},
    filter: {pageNo: 1, pageSize: 10, sort: [], filter: {}},
    optItem: {},
    cityList: []
};

function order(state = initState, action) {
    switch(action.type) {
        case types.FILTER_ORDER: // 筛选订单
            var result = action.result;
            if (result.code === 100000) {

                return {
                    orderObj: action.orderObj,
                    filter: $.extend(true, {}, action.filter),
                    optItem: {},
                    cityList: state.cityList
                };
            }
            else {
                Msg.show('error', {
                    message: '操作失败',
                    description: result.message
                });
                return state;
            }
        case types.CHOSE_ITEM: // 更改改变项
            return {
                orderObj: state.orderObj,
                filter: state.filter,
                optItem: $.extend(true, {}, action.optItem),
                cityList: state.cityList
            };
        case types.TURN_SEND: // 转派
            var result = action.res;
            if (result && result.code === 100000) {
                Msg.show('success', {
                    message: '转派成功',
                    description: result.message
                });
                state.optItem.agentPhone = action.item.userInfo.mobile;
                state.optItem.agentName = action.item.userInfo.staffName;
                state.optItem.agentNo = action.item.userInfo.staffNo;
                state.optItem.agentId = action.item.userInfo.staffId;

                state.orderObj.orderList[state.optItem.index].agentPhone = action.item.userInfo.mobile;
                state.orderObj.orderList[state.optItem.index].agentName = action.item.userInfo.staffName;
                state.orderObj.orderList[state.optItem.index].agentNo = action.item.userInfo.staffNo;
                state.orderObj.orderList[state.optItem.index].agentId = action.item.userInfo.staffId;

                return {
                    orderObj: $.extend(true, {}, state.orderObj),
                    filter: state.filter,
                    optItem: {},
                    cityList: state.cityList
                };
            }
            else {
                Msg.show('error', {
                    message: '转派失败',
                    description: result.message
                });
                return state;
            }
        case types.CANCEL_ORDER: // 取消订单
            var result = action.res;
            if (result && result.code === 100000) {
                Msg.show('success', {
                    message: '取消成功',
                    description: result.message
                });
                state.optItem.agentOrderStatus = 4;
                state.orderObj.orderList[state.optItem.index].agentOrderStatus = 4;
                return {
                    orderObj: $.extend(true, {}, state.orderObj),
                    filter: state.filter,
                    optItem:  {},
                    cityList: state.cityList
                };
            }
            else {
                Msg.show('error', {
                    message: '取消失败',
                    description: result.message
                });
                return state;
            }
        case types.GET_CITYLIST:
            return {
                orderObj: state.orderObj,
                filter: state.filter,
                optItem: state.optItem,
                cityList: $.extend(true, [], action.cityList)
            };
        default:
            return state;
    }
}

module.exports = order;
