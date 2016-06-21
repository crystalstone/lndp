/**
 * @file 使用本地mock
 * 本地开发时，调用本地的接口
 */

var ms = require('mockservice');
var proxyConfig = require('./../mock/proxyConfig');

module.exports = function (app) {
    app.use(function (req, res, next) {
        if (/(MOD|GET|ADD|DEL)/.test(req.url)
            && !proxyConfig.proxyList.hasOwnProperty(req.url.slice(1))) {
            var reqUrl = req.url;
            console.log(reqUrl);
            req.query.path = reqUrl.slice(1).replace('.do', '/do');
            req.url = '/request.ajax?path=' + reqUrl.slice(1).replace('.do', '/do');
            // req.url = '/request.ajax?path=' + reqUrl.slice(1);
            ms.config({
                name: 'mock',
                dir: './mock'
            });
            req.body = req.bodyBuffer;
            ms.serve(req, res);
        }

        next();
    });
};
