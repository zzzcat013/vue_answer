const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/assets'))
      .set('_v', resolve('src/views'))
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : './'  ,
    devServer:{
        port: 8085, // 端口号
        host: "localhost",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            '/ruoyilogin': {
                // 目标 API 地址
                target: 'http://localhost/login',
                method: 'POST',
                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/ruoyilogin': ''   //需要rewrite的,
                }

            }
        },

        before(app){
            app.get('/api/seller',function (req,res) {
                res.json({
                    errno:0,
                    data: seller
                })
            })
            app.get('/api/goods',function (req,res) {
                res.json({
                    errno:0,
                    data: goods
                })
            })
        }
    }
}


