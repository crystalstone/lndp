/**
 * @file 提示.
 * @author wangshiying@zufangit.cn
 */

import antd from 'antd';

module.exports = {
    show: function (type, options) {
        options = options || {};
        antd.Notification[type]({
            message: options.message || '',
            description: options.description || '',
            duration: options.duration === 'isNull' ? null
                : (options.duration || 4),
        });
    }
}
