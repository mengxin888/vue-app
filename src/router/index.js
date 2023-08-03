import { createRouter,createWebHashHistory} from 'vue-router'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'homepage',
            //重定向
            redirect:'/home',
            component:()=>import('../pages/Home/HomePage.vue')
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('../pages/Home/HomePage.vue')

        },
        {
            path:'/login',
            name:'login',
            component:()=>import('../pages/LogIn/LoginPage.vue')

        },
        {
            path:'/usercenter',
            name:'usercenter',
            component:()=>import('../pages/UserCenter/UserCenterPage.vue')

        },
        {
            path:'/cart',
            name:'cart',
            component:()=>import('../pages/Cart/CartPage.vue')

        },
        {
            path:'/order',
            name:'order',
            component:()=>import('../pages/Order/OrderPage.vue')

        }
        ,{
            path:'/shop',
            name:'shop',
            component:()=>import('../pages/Shop/ShopPage.vue')

        },
        
    ]
})
export default router