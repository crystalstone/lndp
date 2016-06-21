define(function(require, exports, module) {
    var random = require('random');

    module.exports = function(path, param, context) {

        var result = {
            code: 100000, // 返回状态码
            message: 'success',
            data: {}
        };

        result.data.totalCount = 210;
        result.data.dataList = [];

        for (var i = 0; i < 20; i++) {
            result.data.dataList.push({
                'agentOrderId': i + random.chars(10), // 经纪人订单id
                'userId': i + random.chars(10), // 客户id
                'userPhone': 18511870727, // 客户电话
                'userName': '王石颖' + i, //
                'userType': 1 , // 1 线上、2线下
                'agentId': i + random.chars(10),
                'agentNo': i + random.chars(10),
                'agentPhone': '123',
                'agentName': '小丹尼',
                'appointLocation': '西二旗', //
                'deptName': '西三旗站6组', // ？？？
                'agentOrderStatus': i%5 + 1, // ??
                'userRemark': '老人带小孩五口',
                'userOrderTime': '2015-11-14 16:23:41',
                'appointTime': '2015-11-24 16:23:41',
                'planCheckInDate': '2015-12-24 16:23:41',
                'orderConfirmTime': '2015-11-21 16:23:41',
                cityId: 110000
            });
        }
        return result;
    }
})