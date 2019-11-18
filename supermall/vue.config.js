module.exports={
    configureWebpack:{
        resolve:{
            alias:{//路径别名配置
                '@':'src',
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'common':'@/common',

            }
        }
    }
}