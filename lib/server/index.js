/**
 * server
 */
var reactServer = require('./webpackServer');
var baseServer = require('./baseServer');

function startServer(type, initPort) {
    type = type || 'base';
    initPort = initPort || '3001';
    switch (type) {
        case 'react':
            reactServer(initPort);
            break;
        default:
            baseServer(initPort);
    }
}

module.exports = startServer;
