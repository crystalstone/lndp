define(function(require, exports, module) {
    var random = require('random');

    module.exports = function(path, param, context) {

        var result = {
            code: 100000, // 返回状态码
            message: 'success',
            data: {
                "totalCount" : 12,  //Intger类型，总数
                "listData": [
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成1",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成2",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成3",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成4",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成4",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成4",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成4",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    },
                    {
                        "iconUrl" : "http://www.zufangzi.com/1.png",     //string类型  icon地址
                        "trackId" : 12,                                  //Long类型 跟进ID
                        "trackType" : 12,                                 //Integer类型 跟进类型
                        "trackTitle" : "支付完成4",                          //String类型 跟进标题
                        "trackContent" : "太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧太棒了，快去处理其他订单吧",       //String类型 跟进内容
                        "create_time" : "2015-12-12",                   //String类型 创建时间
                        "sortId" : 12                                  //Integer类型 跟进排序
                    }
                ]
            }
        };

        return result;
    }
})