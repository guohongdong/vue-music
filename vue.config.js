module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/getDiscList': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        changeOrigin: true,
        ws: true,
        headers: {
          referer: 'https://c.y.qq.com/',
          host: 'c.y.qq.com'
        },
        pathRewrite: {
          '^/getDiscList': ''
        }
      }
    }
  }
}
