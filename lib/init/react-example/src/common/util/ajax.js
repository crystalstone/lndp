/**
 * @ajax封装
 * @author Shiying Wang(wangshiying@baidu.com)
 */

module.exports = {
    send: function (url, param, base) {

        var baseParam = {};

        if(base && !$.isEmptyObject(base)){
            baseParam = base;
        }else {
            baseParam = JSON.parse(this.ajaxSetup().data.base);
        }

        baseParam.uuid = this.getGuid();
        baseParam.timestamp = (new Date()).getTime();

        var data = {
            param: JSON.stringify(param || {}),
            base: JSON.stringify(baseParam || {})
        }

        var dtd = $.Deferred();

        $.post(url, data).then(
            function (res) {
                dtd.resolve(res);
            },
            function (res) {
                alert('通用错误处理');
                dtd.reject(res);
            }
        );

        return dtd;
    },
    ajaxSetup: function () {
        return {
            data: {
                param: JSON.stringify({}),
                base: JSON.stringify({
                    'accountId': '',
                    'accountType': 1, //内部系统accoutType默认传1 //userInfo && userInfo.accountType || '',
                    'account': '',
                    'token': '',
                    'from': 3, //1-web-业务基础平台，2-web-代理商平台 3：web-400平台 4：web-官网 5-ios-客端，  6:andorid-助手, 7:android-客端 8-M站,9-微信
                    'uuid': '', //请求唯一标识,打md5    必填
                    'baseCityId': -1, //城市id  切换的城市id 管理系统没有传-1  必填
                    'timestamp': '' //时间戳 必填
                    // todo: 世博确定是否区分system
                })
            },
            dataType: 'json',
            timeout: 30000
        }
    },

    getGuid: function () {
        var me = this;
        var curr = (new Date()).valueOf().toString();
        return [
            '4b534c46',  // Fixed first group.
            me.rand16Num(4),
                '4' + me.rand16Num(3),  // The first character of 3rd group is '4'.
            me.rand16Num(4),
            curr.substring(0, 12)].join('-');
    },

    /**
     * 随机生成长度为len的guid
     * @param {number} len
     * @return {string}
     */
    rand16Num: function (len) {
        len = len || 0;
        var result = [];
        for (var i = 0; i < len; i++) {
            result.push('0123456789abcdef'.charAt(
                    Math.floor(Math.random() * 16))
            );
        }
        return result.join('');
    }
}
