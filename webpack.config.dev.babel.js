import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: '#cheap-module-eval-source-map',
  entry: {
    bundle: path.join(__dirname,'/app/src/script.js')
  }
});
