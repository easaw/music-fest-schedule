const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: [
        'webpack-hot-middleware/client',
        'tether',
        'font-awesome-loader',
        'bootstrap-loader',
        PATHS.app
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
          publicPath: '/assets/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            "window.Tether": "tether"
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: PATHS.app
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000"
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        }, ]
    },
};

const devExports = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: PATHS.build,

        historyApiFallback: true,
        hot: true,
        inline: true,

        // display only errors to reduce the amount of output
        // stats: 'errors-only',

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new ExtractTextPlugin('react-toolbox.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NpmInstallPlugin({
            save: true // --save
        })
    ],
    postcss: [autoprefixer]

};

let exported = {};

if (TARGET === 'start' || !TARGET) {
    exported = merge(common, devExports);
    validate(exported);
} else if (TARGET === 'build') {
    exported = merge(common, {});
}

module.exports = exported;
