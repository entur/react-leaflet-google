/* eslint-disable */
module.exports = {
    entry: './dist/react-leaflet-google-v2.min.js',
    output: {
        library: {
            root: 'ReactLeafletGoogle',
            amd: 'react-leaflet-google-v2',
            commonjs: 'react-leaflet-google-v2'
        },
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    externals: {
        debug: 'debug',
        leaflet: {
            commonjs: 'leaflet',
            commonjs2: 'leaflet',
            root: 'L'
        },
        'react-leaflet': {
            commonjs: 'react-leaflet',
            commonjs2: 'react-leaflet',
            root: 'ReactLeaflet'
        },
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            root: 'React'
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
};