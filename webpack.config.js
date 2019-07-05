const path = require('path');
const webpack = require('webpack');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports ={
     entry : './src/js/index.js',
     output:{
         path : path.resolve(__dirname,'dist'),
         filename: 'bundle.js'
     },
     module:{
         rules:[
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                    publicPath: '../'       // override the default path
                  }
                }]
              },
              {
                test: /font-awesome\.config\.js/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'font-awesome-loader' }
                ]
              },
             {
                 loader : [
                    'file-loader',
                    'url-loader',
                 ],
                 test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.svg$|\.woff$|\.woff2$|\.eot|\.ttf$|\.wav$|\.mp3$|\.ico$/
             },
             {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
              test: require.resolve('wowjs/dist/wow.js'),
                loader: 'exports-loader?this.WOW'
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                  },
                },
              ],
            }
            
         ],
     },
   
     plugins: [
        // ...
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default']
        }),
        // ...
         new HardSourceWebpackPlugin()
      ],
     mode :'development'

}