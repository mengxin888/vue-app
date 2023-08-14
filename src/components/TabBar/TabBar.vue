<template>
    <div class="TabBar">
        <div>
            <router-link to="/home" class="router"><van-icon  class="icon"  name="wap-home-o" /><span>首页</span></router-link>
        </div>
        <div>
            <router-link to="/cart" class="router"><van-icon class="icon"  name="cart-circle-o" /> <span>购物车</span></router-link>
        </div>
        <div>
            <router-link to="/order" class="router"><van-icon  class="icon" name="manager-o" /><span>消息</span></router-link>
        </div>
        <div>
            <router-link to="/usercenter" class="router"><van-icon  class="icon" name="manager-o" /><span>个人中心</span></router-link>
        </div>
    </div>
</template>
<script>
// import { ref,onMounted,computed,watch} from 'vue';
export default {
    setup() {

    }
}
</script>
<style scoped>
.TabBar {
    height: 3rem;
    line-height: 5rem;
    border-top: .0025rem solid #ccc;
    width: 100%;
    position:fixed;
    bottom:0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* 冻结元素 */
    z-index: 1;
}
.TabBar >div{
    height: 100%;
    width: 33%;
    color: #999;
    font-weight: 500;
    padding: 5px 0;
    background-color: #fff;
    text-align: center;
    border-right: .5px solid #ccc;
}
.TabBar >div:nth-child(4){
    border-right: none;
    
}
.router{
    display: flex;
    flex-direction: column;
    /* align-items: baseline; */
    justify-content: center;
    color: black;
}
.router >span{
    height: 20px;
    font-size: 12px;
    line-height: 20px;
}
.icon{
    font-size: 25px;
}

.router-link-active{
    color: #f00;
}
</style>