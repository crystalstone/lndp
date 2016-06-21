var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpackConf/wp.config')();
console.log(process.argv);

var obj = {
    // contentBase: config.context,
    publicPath: '/asset/',
    hot: true,
    quiet: false,
    noInfo: false,
    watchOption: {
        aggregateTimeout: 300, // 延迟rebuild
        poll: true
    },
    stats: {
        //chunks: false,
        colors: true
    },
    // historyApiFallback: true,
    historyApiFallback: {
        index: 'index.html'
    }
};

if (process.argv[process.argv.length - 1] === '--production') {
    obj.contentBase = './production';
    config = require('./webpackConf/wp.config.production');

    webpack(config, function(err, stats) {
            if (err) {
                console.log(err);
            }
            console.log('production Done!');
        }
    );

    return;
}
else if (process.argv[process.argv.length - 1] === '--stage') {
    obj.contentBase = './stage';
    config = require('./webpackConf/wp.config.stage');

    webpack(config, function(err, stats) {
            if (err) {
                console.log(err);
            }
            console.log('stage Done!');
        }
    );

    return;
}

var server = new WebpackDevServer(webpack(config), obj);

require('fs')
    .readdirSync('./middleware')
    .forEach(function (file) {
        if (file.substr(-3) === '.js') {
            var middleware = require('./middleware/' + file);
            middleware(server);
        }
    });


server.listen(8080, function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8080');
});
