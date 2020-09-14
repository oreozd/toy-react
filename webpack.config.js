module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {//babel-loader配置
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], //提前加入的一些配置项
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    mode: "development",  //提升构建的文件的可读性
    optimization: {
        minimize: false
    }
}