const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/app/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            clean: true,
            publicPath: '',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@shared': path.resolve(__dirname, 'src/shared'),
                '@entities': path.resolve(__dirname, 'src/entities'),
                '@widgets': path.resolve(__dirname, 'src/widgets'),
                '@providers': path.resolve(__dirname, 'src/providers'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                namedExport: false,
                            },
                        },
                    },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                        ],
                                    ],
                                },
                            },
                        }, {
                            loader: 'sass-loader',
                            options: {
                                api: 'modern-compiler',
                                sassOptions: {
                                    silenceDeprecations: ['legacy-js-api'],
                                },
                            },
                        }],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico'
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 3000,
            hot: true,
            historyApiFallback: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\/]node_modules[\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
    };
};