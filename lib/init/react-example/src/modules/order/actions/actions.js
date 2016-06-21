/**
 * @file: 订单管理-actions
 * @auth: wangshiying@zufangit.cn
 */
import * as types from './actionTypes';

/**
 * choseOptItem - action 选择要操作的对象
 * @param {object} item
 * @return {object} action
 */
export function choseOptItem(item) {
    return {
        type: types.CHOSE_ITEM,
        optItem: item
    };
}

/**
 * 异步获取订单列表的数据
 * @param {Object} condition 筛选条件，可为空
 */
export function cityListAsync(condition) {
    return dispatch => {
        Ajax.send(
            'GET/department/ciytsByStaffRole.do',
            condition
        ).done(
            function(res) {
                dispatch(cityList(res));
            }
        );
    };
}

/**
 * choseOptItem - action 选择要操作的对象
 * @param {object} item
 * @return {object} action
 */
export function cityList(res) {
    return {
        type: types.GET_CITYLIST,
        cityList: res.data || []
    };
}


/**
 * 异步获取订单列表的数据
 * @param {Object} condition 筛选条件，可为空
 */
export function filtetAsync(condition) {
    return dispatch => {
        Ajax.send(
            'GET/order/agentOrderListForBack.do',
            condition
        ).done(
            function(res) {
                dispatch(filter(res, condition));
            }
        );
    };
}

/**
 * filter - action 获取订单列表
 * @param {object} res 筛选后的列表数据
 * @return {object} action
 */
export function filter(res, filter) {
    return {
        type: types.FILTER_ORDER,
        result: res,
        filter: filter,
        orderObj: res.data
            && {orderList: res.data.dataList || [], totalCount: res.data.totalCount || 1}
            || {orderList: [], totalCount: 1}
    };
}


/**
 * choseOptItem - action 对某个订单的操作
 * @param {object} type 操作类型
 * @param {object} value 值
 */
export function orderOpt(type, params, item) {
    return dispatch => {
        switch(type) {
            case 'turnSend': // 转派
                dispatch(turnSendAsync(type, params, item));
                break;

            case 'cancelOrder': // 关闭
                dispatch(cancelOrderAsync(type, params, item));
                break;

            default:
                break;
        }
    };
}

/**
 * ?
 * @param {string} type 操作类型
 * @param {Object} params 参数
 * @param {Object} item 操作对象
 */
export function turnSendAsync(type, params, item) {
    return dispatch => {
        Ajax.send(
            'MOD/order/transferOrder.do',
            params
        ).done(
            function(res) {
                dispatch(turnSend(res, type, item));
            }
        );
    };
}

/**
 * 转派
 * @param {Object} res 操作请求的响应
 * @param {string} type 操作类型
 * @param {Object} item 操作对象
 * @return {Object} action
 */
export function turnSend(res, type, item) {

    return {
        type: types.TURN_SEND,
        res: res,
        item: item
    };
}

/**
 * 需求订单
 * @param {string} type 操作类型
 * @param {Object} params 参数
 * @param {Object} item 操作对象
 */
export function cancelOrderAsync(type, params, item) {
    return dispatch => {
        Ajax.send(
            'MOD/viewOrder/closeOrder.do',
            params
        ).done(
            function(res) {
                dispatch(cancelOrder(res, type, item));
            }
        );
    };
}

/**
 * 需求订单
 * @param {Object} res 操作请求的响应
 * @param {string} type 操作类型
 * @param {Object} item 操作对象
 * @return {Object} action
 */
export function cancelOrder(res, type, item) {

    return {
        type: types.CANCEL_ORDER,
        res: res,
        item: item
    };
}
