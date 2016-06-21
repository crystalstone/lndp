/**
 * 一个mock文件的例子
 * / 转为了 _
 */
 define(function (require, exports, module) {
     module.exports = function (path, param, context) {
         return {
             code : 100000, // 返回状态码
             message: 'success',
             data: [
                 {
                    'cityId': 110000,    //北京
                    'simpleSpell': 'bj', //简拼
                    'name': '北京', //城市名称
                    'parentId': -1, //上级城市
                    'level': 1,
                    'fullSpell': 'beijing',
                    'threeLetter':' PEK',//三字码
                },
                {
                    'cityId': 310000,    //上海
                    'simpleSpell': 'shanghai', //简拼
                    'name': '上海', //城市名称
                    'parentId': -1, //上级城市
                    'level': 1,
                    'fullSpell': 'shanghai',
                    'threeLetter':' shanghai',//三字码
                },
                {
                    'cityId': 131000,    //上海
                    'simpleSpell': 'yanjiao', //简拼
                    'name': '燕郊', //城市名称
                    'parentId': -1, //上级城市
                    'level': 1,
                    'fullSpell': 'yanjiao',
                    'threeLetter':' yanjiao',//三字码
                },
                {
                    'cityId': 130000,    //上海
                    'simpleSpell': 'shanghai', //简拼
                    'name': '深圳', //城市名称
                    'parentId': -1, //上级城市
                    'level': 1,
                    'fullSpell': 'shanghai',
                    'threeLetter':' shanghai', //三字码
                }
             ]
         };
     };
 });
