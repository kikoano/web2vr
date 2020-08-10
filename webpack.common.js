const path = require('path');

module.exports = {
    entry: './src/web2vr.js',
    externals: {
        aframe: 'aframe'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "web2vr.js",
        library: 'Web2VR',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        //plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-proposal-private-methods']
                    }
                }
            }
        ]
    }
};