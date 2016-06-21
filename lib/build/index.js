/**
 * 初始化新项目
 */
var gulp = require('gulp');
var fs = require('fs');
require('./gulp/requireProcesser');
var child_process = require('child_process');

function buildProject (type) {
    type = type || 'base';
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

    gulp.task('default', ['requirejs'], function () {
        console.log('ok');
    });

    child_process.spawn(
        'gulp'
    )
}

module.exports = buildProject;
