
const path =  require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path:       path.resolve(__dirname, 'docs/'),
        filename:   'build/bundle.js'
    },
    devServer: {
        contentBase: './docs'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/public/]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader?name=img/[name].[ext]"
            },{
                test: /\.json$/,
                loader: "json-loader?name=json/[name].[ext]"
            },{
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
};
