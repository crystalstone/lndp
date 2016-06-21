/**
 * server
 */
var express = require('express');
var http = require('http');
var fs = require('fs');

function startServer(initPort) {
    var app = express();

    // 读取所有的中间件, 进行处理
    var midPwd = process.cwd();
    fs.exists(midPwd + '/middleware', function(isExist) {
        if (isExist) {
            fs.readdirSync(midPwd + '/middleware').forEach(function(file) {
                if (file.substr(-3) === '.js') {
                    var middleware = require(midPwd + '/middleware/' + file);
                    middleware(app, express);
                }
            });
        } else {
            console.log('无中间件挂载');
        }
    });

    var port = normalizePort(initPort);

    /**
     * 处理端口号
     * @param  {number} val
     * @return {number} 端口号
     */
    function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            return val;
        }

        if (port >= 0) {
            return port;
        }

        return false;
    }

    var server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onError(error) {
        logger.error(error);

        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
        console.log('服务已启动：' + bind);
    }
}

module.exports = startServer;
