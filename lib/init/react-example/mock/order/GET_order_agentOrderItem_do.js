define(function(require, exports, module) {
    var random = require('random');

    module.exports = function(path, param, context) {

        var result = {
            code: 100000, // 返回状态码
            message: 'success',
            data: {
                "agentOrderId": "12345",  // Long类型  订单号
                "userName": "小李",  // 用户姓名
                "userPhone": 18333333331,  // 用户电话
                "resource": 1,   // Integer类型  订单来源
                "orderCreateTime":  '2018-23-23 ww:ss:ss',  // 用户下单时间
                "appointTime": '2018-23-23 ww:ss:ss',  // 看房时间
                "appointLocation": '京密路', // 看房地点
                "checkinTime" : 'dddd', // 入住时间
                "userRemark": 'eee',// 租客备注
                "isNew": 1, //是否首次操作
                "houseTimes": 4,// 预约房源数
                "orderProgress": 444444,//订单进度 todo
                "houseList" : [

                ]
            }
        };

        return result;
    }
})