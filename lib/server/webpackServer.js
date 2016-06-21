/**
 * @file webpack server
 */

 var webpack = require('webpack');
 var WebpackDevServer = require('webpack-dev-server');
 var fs = require('fs');

 function startServer(initPort) {
     var midPwd = process.cwd();

     var webpack = require('webpack');
     var ExtractTextPlugin = require('extract-text-webpack-plugin');

     var config = require(midPwd + '/wp.config')(webpack, ExtractTextPlugin);

     var obj = {
         path: config.output.path,
         publicPath: '/asset/',
         hot: true,
         stats: { colors: true  },
         historyApiFallback: true
     };

     var server = new WebpackDevServer(webpack(config), obj);

     require('fs')
         .readdirSync('./middleware')
         .forEach(function (file) {
             if (file.substr(-3) === '.js') {
                 var middleware = require(midPwd + '/middleware/' + file);
                 middleware(server);
             }
         });


     server.listen(initPort, function(err, result) {
         if (err) {
             console.log(err);
         }
         console.log('Listening at localhost:' + initPort);
     });
 }

 module.exports = startServer;
