// Core
const webpack = require('webpack');
const path = require('path');
// Css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Sprites
const SpritesmithPlugin = require('webpack-spritesmith');
// const SpritePlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    // publicPath: '/hero-slider/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    contentBase: './dist',
  },

  devtool: 'source-map',

  module: {
    rules: [      
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // Disabled AMD syntax
      // fix problem with scrollMagic plugins
      { test: /\.js$/, loader: 'imports-loader?define=>false' },

      // css
      {
        test: /\.pcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },

      // imgMin
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '75-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },

      // svg sprites
      // {
      //   test: /\.svg$/,
      //   // include: [
      //   //   path.resolve(__dirname, 'src/images/sprites-svg')
      //   // ],
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         extract: true,
      //         publicPath: '/static/',
      //       },
      //     },
      //     'svgo-loader',
      //   ],
      // },

      // Sprites
      // {
      //   test: /\.png$/,
      //   use: [
      //     'file-loader?name=images/[name].[ext]',
      //   ],
      // },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/images/sprites'),
        glob: '*.png',
      },
      target: {
        image: path.resolve(__dirname, 'src/images/sprite.png'),
        css: path.resolve(__dirname, 'src/style/lib/sprite.css'),
      },
      apiOptions: {
        cssImageRef: './images/sprite.png',
      },
    }),

    // new SpritePlugin(),

    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),

    new HtmlWebpackPlugin({
      // inject: false,
      // hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
