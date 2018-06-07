const webpack = require('webpack');
const path = require("path");
const package = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = (env,argv)=>({
    entry: "./src/v-split-characters.js",

    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'v-split-characters.js',
        library: 'VueSplitCharacters',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
});