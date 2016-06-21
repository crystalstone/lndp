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

        for (var i = 0; i < 10; i++) {
            result.data.dataList.push({
                'id': i + random.chars(10), //
                'cus': 'xitonghao' + i + random.chars(10), //
                'cityId': 310000, //
                'cityName': '上海',
                'cusType': 1, //
                'address': '西二旗', //
                'orderState': i % 3 + 1,
                'jinji': 'sdsdsd',
                "depts": [
                    {
                        "deptId": 2,
                        "deptNo": "ZL0002",
                        "deptName": "运营二部"
                    },
                    {
                        "deptId": 3,
                        "deptNo": "ZL0003",
                        "deptName": "运营三部"
                    }
                ],
                'reason': '跟进',
                'orderDate': '2015/11/19 11:15',
                'confirmDate': '2015/11/19 11:15'
            });
        }
        return result;
    }
})
