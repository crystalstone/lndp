# lndp
链家前端脚手架

安装
npm i -g lndp 或者 cnpm i -g lndp

使用
1. 对于react项目

a. 初始化项目：

mkdir test
cd test
lndp init react // 初始化react类型的项目
npm i // 一定要执行这句话，安装依赖

(帮你生成一个react-router  +  redux)的例子，
例子中使用了antd的组件，请参考http://ant.design/，您也可以去掉这个组件的依赖）


b. 启动项目

命令行中，在test(你创建的项目)目录下，执行 npm start;
http://localhost:8080/    查看效果
点击左侧菜单，可以载入订单模块。

c. 编译打包

测试环境构建：npm run stage

线上环境构建：npm run production

命令跑完后，会在你项目目录下，创建release目录，这个就是压缩打包后的结果

d. 其他的说明
(1）flagConf 是干嘛的？
很多团队，主干开发，分支上线；开发中的功能，需要flag来控制====>测试环境可见、线上环境不可见。
如下面的配置：
module.exports = {
    development: { // 本地开发环境
        contractAudit: true
    },
    stage: { // 测试环境
        contractAudit: true
    },
    production: { // 线上环境
        contractAudit: false
    }
};

在代码中使用的话，
import appConfig from 'webpack-config-loader!../../../flagConf/config.js'; // 引入配置文件

在代码中插入判断：
if (appConfig.contractAudit) {
    // 有这些功能......
}

(2）proxy 帮你随意的连线上环境、测试环境
怎么用？你需要在mock文件夹下配置 proxyConfig.js。
module.exports = {
    isProxyAll: false, // true: 全部接口, 都代理到proxyServer上; false: 根据列表来代理;
    proxyServer: '', // 如果全部接口，都走代理，那么，都会走proxyServer
    proxyList: {
        // example
        // 'Get/xxx/xxx': 'http://192.168.x.x' // 如果不同的接口，连接的环境不一样，请分别在这里配置
    }
};

(3) mock 在middleware的中间件中，有个mockservice，用途是本地开发时，你可以自己mock接口。
一般的规则是/ 会改成 _
例如：一个接口GET/user/info   ==>  你要在mock文件夹里，创建个 GET_user_info.js的文件

2. 其他基本的项目开发中...待续
