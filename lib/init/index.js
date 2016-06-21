/**
 * 初始化新项目
 */
var child_process = require('child_process');
var fs = require('fs');

function initProject (type) {
    type = type || 'base';
    var examplePath = __dirname + '/' + type + '-example/';
    fs.exists(examplePath, function (isExist) {
        if (isExist) {
            child_process.spawn(
                'cp',
                ['-r', examplePath, process.cwd() + '/']
            )
            .on('close', function () {
                console.log('请自行执行：npm install');
            });
        }
    });

}

module.exports = initProject;
