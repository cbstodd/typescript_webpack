var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: "./src/app.ts",
    // Places files from loaders.
    output: {
        path: './build',
        filename: "app.js"
    },
    module: {
        loaders: [
            // Says to load any .ts file from /src
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    watch: true
};