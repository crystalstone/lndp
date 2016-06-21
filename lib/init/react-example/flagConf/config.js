/**
 * @file flag 配置
 * 用途：一些开发中的功能, 我们希望测试环境可以看到，线上看不到，可以加flag；
 * 或者，不太环境，一些值不一样，都可以在这里进行配置
 */
module.exports = {
    development: { // 本地开发环境
        path: '/index.html',
        uploadPath: 'http://10.14.24.41:8070/ADD/uploader/file.do',
        fileUploadServer: 'http://10.14.24.41:7080/',
        contractAudit: true,
        blanknoteAudit: true
    },
    stage: { // 测试环境
        path: '/internal/index.html',
        uploadPath: 'http://10.14.24.41:8070/ADD/uploader/file.do',
        fileUploadServer: 'http://10.14.24.41:7080/',
        contractAudit: true,
        blanknoteAudit: true
    },
    production: { // 线上环境
        path: '/index.html',
        uploadPath: 'http://static.zufangzi.com/ADD/uploader/file.do',
        fileUploadServer: 'http://static.zufangzi.com/',
        contractAudit: true,
        blanknoteAudit: false
    }
};
