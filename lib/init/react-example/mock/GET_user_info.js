/**
 * 一个mock文件的例子
 * / 转为了 _
 */
 define(function (require, exports, module) {
     module.exports = function (path, param, context) {
         return {
             code : 100000, // 返回状态码
             message: 'success',
             data: {
                 name: '张三'
             }
         };
     };
 });
