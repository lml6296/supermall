import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Category=()=>import('../views/category/Category')
const Profile=()=>import('../views/profile/Profile')
const Detail=()=>import('../views/detail/Detail')

//1.安装路由插件
Vue.use(Router)
//2.创建路由对象并导出路由
export default new Router({

    routes: [
        {
            path:'/',
            redirect:'/Home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/category',
            component:Category
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/detail/:iid',
            component:Detail
        }
    ],
    mode:'history'//不采用哈希模式(使用单引号)

})
