const { override, fixBabelImports } = require('customize-cra')
// 安装compression-webpack-plugin 压缩js为gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    // 关闭sourceMap
    config.devtool = false
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      })
    )
  }
  return config
}
module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    addCustomize()
  )
}
