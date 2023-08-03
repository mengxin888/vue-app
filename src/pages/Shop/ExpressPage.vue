<template>
  <div class="border-radius">
    <CardPage>
      <template v-slot:left-icon>
        <van-icon name="logistics" class="icon left-icon" />
      </template>
      <template v-slot:title>
        <div class="express-info">
          <p><span>福建厦门</span><span>快递：免运费</span></p>
          <p class="address-info">配送至：xxx xxx xxx</p>
        </div>
      </template>
      <template v-slot:right-icon>
        <van-icon name="arrow" class="arrow" />
      </template>
    </CardPage>
    <CardPage>
      <template v-slot:left-icon>
        <van-icon name="like-o" class="icon left-icon" />
      </template>
      <template v-slot:title>
        <p>退货运费险.急速退款.7天无理由退货</p>
      </template>
      <template v-slot:right-icon>
        <van-icon name="arrow" class="arrow" />
      </template>
    </CardPage>
    <CardPage>
      <template v-slot:left-icon>
        <van-icon name="apps-o" class="icon left-icon" />
      </template>
      <template v-slot:title>
        <p>共一种颜色分类可选</p>
      </template>
      <template v-slot:right-icon>
        <van-icon name="arrow" class="arrow" />
      </template>
    </CardPage>
    <CardPage>
      <template v-slot:left-icon>
        <van-icon name="orders-o" class="icon left-icon" />
      </template>
      <template v-slot:title>
        <p>品牌.系列.型号.内存容量.硬盘容量</p>
      </template>
      <template v-slot:right-icon>
        <van-icon name="arrow" class="arrow" />
      </template>
    </CardPage>
  </div>
  <div ref="evaluation1"><CardPage class="evaluation">
    <template v-slot:title>
      <div class="evaluation-title">评价（xxx+）</div>
    </template>
    <template v-slot:right-icon>
      <van-icon name="arrow" class="arrow" />
    </template>
    <template v-slot:tabs>
      <span class="evaluate-tab">玩游戏很棒（77）</span>
      <span class="evaluate-tab">续航能力强（127）</span>
    </template>
    <template v-slot:content-text>
      <div class="user-info">
        <img src="../../assets/logo.png" alt="" class="userheads" />
        <span class="username">name</span>
      </div>
      <div>
        <p>电脑很nice</p>
        <p class="user-config-info">颜色分类：618狂欢倒计时；硬盘容量：2TB：内存容量：16GB</p>
      </div>
      <div class="user-info">
        <img src="../../assets/logo.png" alt="" class="userheads" />
        <span class="username">name</span>
      </div>
      <div>
        <p>电脑很nice</p>
        <p class="user-config-info">颜色分类：618狂欢倒计时；硬盘容量：2TB：内存容量：16GB</p>
      </div>
      <div class="user-info">
        <img src="../../assets/logo.png" alt="" class="userheads" />
        <span class="username">name</span>
      </div>
      <div>
        <p>电脑很nice</p>
        <p class="user-config-info">颜色分类：618狂欢倒计时；硬盘容量：2TB：内存容量：16GB</p>
      </div>
    </template>
  </CardPage></div>
  <CardPage class="evaluation">
    <template v-slot:title>
     <span class="evaluation-title">问大家（xxx）</span>
    </template>
    <template v-slot:right-icon>
      <van-icon name="arrow" class="arrow" />
    </template>
    <template v-slot:content-text>
      <p class="questions"><span class="questions-keyword">问</span><span class="questions-content">这个真的会烧主板吗，轻度玩游戏和轻度使用会烫手吗？</span><span class="questions-right">3个回答</span></p>
      <p class="questions"><span class="questions-keyword">问</span><span class="questions-content">这个真的会烧主板吗，轻度玩游戏和轻度使用会烫手吗？</span><span class="questions-right">3个回答</span></p>
    </template>
  </CardPage>
  <div class="shoprecommended">
    <p class="shoprecommended-title"><span>店铺推荐</span><van-icon name="arrow" class="arrow" /></p>
    <ul class="shoprecommended-items">
      <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        <li class="shoprecommended-item"><img class="shoprecommended-img" src="../../assets/logo.png" alt=""><span class="shoprecommended-name">【现货速达】悟空k7 17.3英寸12代酷睿i7-12700h</span><p class="shoprecommended-price"><svg
          t="1689059501784"
          class="content-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2303"
          width="13"
          height="13"
        >
          <path
            d="M851.2 57.6 608 465.066667l211.2 0 0 72.533333L561.066667 537.6l0 115.2 260.266667 0L821.333333 725.333333 561.066667 725.333333l0 241.066667-96 0L465.066667 725.333333 206.933333 725.333333l0-72.533333 258.133333 0 0-115.2L206.933333 537.6l0-72.533333 211.2 0L172.8 57.6l106.666667 0 234.666667  401.066667L746.666667 57.6 851.2 57.6z"
            fill="#d81e06"
            p-id="2304"
          ></path>
        </svg><span>4599</span></p></li>
        

     
    </ul>
  </div>
</template>
<script>
import CardPage from "./CardPage.vue";
import {ref} from 'vue';
//import { ref,reactive,onMounted,computed,watch} from 'vue';
export default {
  components: {
    CardPage,
  },
  setup() {
    let evaluation1=ref(null);
    return {
      evaluation1,
    };
  },
};
</script>
<style scoped>
.express {
  display: flex;
  position: relative;
}
.icon {
  font-size: 30px;
  color: #999;
  line-height: 60px;
}
.express-info {
  line-height: 30px;
}
.address-info {
  font-size: 15px;
  color: #999;
}
.arrow {
  font-size: 20px;
  color: #999;
}
.evaluation {
  margin-top: 20px;
  border-radius: 10px;
}
.evaluate-tab {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  border-radius: 15px;
  background-color: #fde8e5;
  font-size: 12px;
  color: #df5d20;
  margin: 10px 10px 0 0;
  padding: 0 5px;
}
.left-icon {
  margin-right: 10px;
}
.border-radius {
  border-radius: 10px;
  /* 超出部分隐藏 */
  overflow: hidden;
  padding: 10px 0;
  /* 边框计算在元素高度中 */
  box-sizing: border-box;
  background-color: #f9f9f9;
}
.evaluation-title {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
.userheads {
  border-radius: 50%;
}
.user-info {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  margin: 10px 0;
}
p{
  font-size: 14px;
}
.user-config-info{
  margin-top:5px;
  font-size: 12px;
  color: #999;
}
.questions{
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.questions-content{
  white-space: nowrap; /* 不允许换行 */
  overflow: hidden; /* 溢出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  margin: 0 10px;
}
.questions-right{
  white-space: nowrap; /* 不允许换行 */
  margin-right:20px;
  color:#999;
  font-size:12px;
}
.shoprecommended{
  margin-top: 20px;
  border-radius: 15px;
  background-color:#f9f9f9;
  padding: 10px;
}
.shoprecommended-title{
  display: flex;
  /* 两端对齐 */
  justify-content: space-between;
}
.shoprecommended-img{
  height: 80px;
  width: 80px;
}
.shoprecommended-item{
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #999;
}
.shoprecommended-items{
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  margin-top: 10px;
}
.shoprecommended-name{
  color:black;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shoprecommended-price{
  color: #d81e06;
  font-size: 20px;
  margin-left: -60px;
}
</style>
