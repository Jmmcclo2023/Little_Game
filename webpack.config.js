const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
/*
        new CopyWebpackPlugin ({
            patterns: [
                { 
                    from: path.resolve(__dirname, ''),
                    to: path.resolve
                }
            ],
        }),
*/

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/site/main.js'),
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
        assetModuleFilename: 'assets/models/[name][ext]'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(glb|gltf)$/i,
                type: 'asset/resource' ,
                /*
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/models/'
                        }
                    }
                ],*/
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Little Game',
            filename: "index.html",
            template: 'public/template.html',
        }),
    ],

    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        open: true,
        port: 9000,
        historyApiFallback: true,
    },
};