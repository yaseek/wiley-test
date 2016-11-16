'use strict';

// http://webpack.github.io/docs/
let webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix');


class WebpackConfig {
  /**
   * @param {Object} descriptor
   * @param {String} descriptor.name
   * @param {String} descriptor.version
   * @param {String} descriptor.homepage
   * @param {Object} path
   * @param {String} path.src
   * @param {String} path.dist
   */
  constructor(descriptor, path) {
    this.name = descriptor.name;
    this.version = descriptor.version;
    this.homepage = descriptor.homepage;
    this.path = path;
  }
  /**
   * @returns {Object}
   */
  get() {
    let entry = {};

    entry[this.name] = this.path.src;
    entry[this.name + '.min'] = this.path.src;

    return {
      entry,
      lessLoader: {
        lessPlugins: [
          new LessPluginCleanCSS({advanced: true}),
          new LessPluginAutoPrefix({browsers: [">5%"]})
        ]
      },
      compress: {
        warnings: false
      },
      module: {
        loaders: [
          // https://github.com/babel/babel-loader
          {
            test: /\.js$/,
            loader: 'babel',
            query: {compact: false}
          },
          // https://github.com/webpack/json-loader
          {test: /\.json$/, loader: 'json'},
          // https://github.com/webpack/html-loader
          {test: /\.html$/, loader: 'raw'},
          {test: /\.ya?ml$/, loader: 'yml'},
          {
            test: /\.less$/, 
            loader: ExtractTextPlugin.extract(
              'css?sourceMap!' +
              'less?sourceMap'
            )
          }
        ]
      },
      devtool: 'source-map',
      output: {
        libraryTarget: 'umd',
        library: this.name,
        filename: '[name].js'
      },
      plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
          // Minify only [name].min.js file
          // http://stackoverflow.com/a/34018909
          include: /\.min\.js$/
        }),
        new webpack.BannerPlugin(
          `/*\n` +
          ` ${this.name} v${this.version}\n` +
          ` ${this.homepage}\n` +
          `*/\n`
          , {
            entryOnly: true,
            raw: true
          })
      ]
    };
  }
}

module.exports = WebpackConfig;