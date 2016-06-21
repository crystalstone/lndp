/**
 * 前端编译打包生成项目工具
 */

var program = require('commander');
//var build = require('lib/build/index');
var init = require('./lib/init/index');
var server = require('./lib/server/index');
var build = require('./lib/build/index');

// 初始化项目:目录等
program
  .version('0.0.1')
  .command('init [type]')
  .description('初始化项目, 有2种类型: base、react')
  .action(function (type) {
    console.log('初始化项目文件夹, 类型: ' + type);
    init(type);
  }
);


// 初始化项目:目录等
program
  .version('0.0.1')
  .command('start [type] [port]')
  .description('启动项目')
  .action(function (type, port) {
    console.log('开始启动项目server, 端口号：' + port);
    server(type, port);
  }
);

// 项目打包构建
program
  .version('0.0.1')
  .command('build [type]')
  .description('构建, 有2种类型: base、react')
  .action(function (type) {
    build(type);
  });

program.parse(process.argv);
