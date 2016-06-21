/**
 * @file 将特定请求指向代理
 */

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var proxyConfig = require('./../mock/proxyConfig');

module.exports = function (app) {
    app.use(function (req, res, next) {

        if (/(MOD|GET|ADD|DEL)/.test(req.url)) {
            if (proxyConfig.isProxyAll) {
                proxy.web(req, res, {target: proxyConfig.proxyServer});
            }
            else {
                // 在代理列表中
                if (proxyConfig.proxyList.hasOwnProperty(req.url.slice(1))) {
                    proxy.web(
                        req, res,
                        {
                            target: proxyConfig.proxyList[req.url.slice(1)]
                        }
                    );
                }
                else {
                    next();
                }
            }
        }

        next();
    });

};
