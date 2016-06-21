/**
 * @file 强制刷新.
 * @author wangshiying@zufangit.cn
 */

module.exports = {
    fresh: function (hash) {
        setTimeout(
            function () {
                location.hash = hash;
            },
            100
        );
        location.hash = '';
    }
}
