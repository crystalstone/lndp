define(function(require, exports, module) {
    var random = require('random');

    module.exports = function(path, param, context) {

        var result = {
            code: 100000, // 返回状态码
            message: 'success',
            data: {
                "agentOrderId": "12345",   // Long类型  经纪人订单号
                "userId": 112,            // 客户id
                "userName": 'ssss',          // String类型 客户姓名
                "userPhone": 121,         // String类型 客户电话
                "resource": 1,            // Integer类型  订单来源
                "userOrderTime": '202',        // 用户下单时间
                "appointTime":  '2',         // String类型 看房时间
                "appointLocation": "京密路", // String类型 约看地点
                "planCheckInDate": 'ww',       // String类型 入住时间
                "userRemark":  'ww',         // String类型 租客备注
                "isNew": 1,              //Integer类型 是否首次操作 0：否；1：是
                "houseTimes": 2,          // Integer 预约房源数
                "orderProgress": '33',       //订单进度 todo 调用合同接口
                "orderRemark": 'eee',           // String类型 订单备注 todo 调用合同接口
                "houseList": [{
                    "orderItemId": "12345",   // Long类型  子订单id
                    "productId": 'eee',            // Long类型 商品id
                    "orderItemStatus": 2,      // Integer类型 子订单状态1、待看;2、已看;3、签约中;4、已签约;5、已取消
                    "isNew": 1,              // Integer类型 是否首次操作 0：否；1：是
                    "houseRemark": 'ee',                     //房源备注 TODO
                    "contactId":"2223333",                 //Long类型 联系人id
                    "contactName":"xx先生",                //String类型 联系人姓名
                    "contactType":1,                       //Integer类型 联系人类型
                    "hasKeyId":"2223333",                  //Long类型 钥匙人id
                    "hasKeyName":"xx先生",                 //String类型 钥匙人姓名
                    "hasKeyType":1,                       //Integer类型 钥匙人类型
                    "cityId":"110000",                     //Integer类型
                    "resblockHouseId":"234343",           //Long类型 楼盘字典房屋id
                    "houseSourceCode":"LAF0012604128",    //String 房源编号
                    "resblockId":"2222",                  //Long类型 小区id
                    "resblockName":"元阳山村",             //String类型 小区名称 远洋山水
                    "coverUrl":"a.jpg",                   //String类型 封面url地址
                    "monthRent":133000,                   //Integer类型 月租金 分
                    "floor":2,                            //Integer 楼层
                    "floorTotal":22,                      //Integer 总楼层
                    "bedroomAmount":2,                    //Integer类型 卧室数
                    "parlorAmount":1,                     //Integer类型 厅数
                    "cookroomAmount":1,                   //Integer类型 厨房数
                    "toiletAmount":1,                     //Integer类型 卫生间数
                    "productSize":55,                       //Double类型 建筑面积
                    "orientation":"朝南",                 //String类型 朝向
                    "state":1,                           //Integer 商品状态
                    "houseTags":[2,3],                   //List<Integer> 房屋动态标签
                    "rentType":1                     //Integer类型 出租方式1-分租2-整租
                }]
            }
        };

        return result;
    }
})