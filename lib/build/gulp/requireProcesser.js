/**
 * @file 模块化，构建
 */
var r = require('requirejs');

module.exports = function () {
    gulp.task('requirejs', function (done) {
        r.optimize({
            appDir: process.cwd() + '/src/',
            baseUrl: process.cwd() + 'src/js',
            dir: process.cwd() + '/dist',
            optimize: 'none',
            optimizeCss: 'none',
            removeCombined: true,
            mainConfigFile: process.cwd() + '/src/require.config.js',
            modules: [

            ]
        }, function () {
            done();
        });
    });
}
