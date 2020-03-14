/*
    This is the file we use to create the
    configuration that transpiles the JSX
    into JS and creates the server so
    we have live changes
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.js'),
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                // Compile main index
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-react'],
                    plugins: ['react-hot-loader/babel'],
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                './public/index.html'
            ),
        }),
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    stats: 'errors-only',
    watchOptions: {
        ignored: ['node_modules'],
    },
};
