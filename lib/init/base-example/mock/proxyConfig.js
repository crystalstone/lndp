/**
 * @file 代理配置
 */

var proxyConfig = {
    isProxyAll: false, // true: 全部接口, 都代理到proxyServer上; false: 根据列表来代理;
    proxyServer: '',
    proxyList: {
        // example
        // 'Get/xxx/xxx': 'http://192.168.x.x'
    }
}
