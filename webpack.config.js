const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : false,
      sourceMap : true,
      mangle: false,
      compress: {
        warnings: true
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'block-content-to-vue.min.js',
      libraryTarget: 'window',
      library: 'BlockContent',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/BlockContent.vue'),
    output: {
      filename: 'block-content-to-vue.js',
      libraryTarget: 'umd',
      library: 'block-content-to-vue',
      umdNamedDefine: true
    }
  })
];
