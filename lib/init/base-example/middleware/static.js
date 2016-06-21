/**
 * @file 吐出html
 * 暴露出来，可以方便大家根据自己的需求进行更改
 */

var fs = require('fs');

module.exports = function (app, express) {
     // 静态资源服务器
    app.use(express.static(process.cwd() + '/src'));

    app.use(function (req, res, next) {
        if (/\.(html|tpl)/.test(req.url)) {
             var htmlPath = process.cwd() + '/src' + req.url;
             var tpl = fs.readFileSync(htmlPath, 'utf-8');

             // 如果，你要模拟后端渲染，如freemarker，这里可以改造，
             // 读取mock中同步页面的数据，然后渲染模板
             // eg:  var html = fm.renderSync(redirectPath, {
             // data: pageData
             // });

             res.send(tpl);
         }
         else {
             next();
         }

     });
 };
