<template>
 <div>
  <van-icon name="arrow-left" class="icon-1" />
  <div class="header" ref="header">
    <span>图集</span>
  </div>
  <div class="top" ref="top" :style="{ opacity: opacity }">
    <input type="text" class="top-input" />
    <van-tabs v-model:active="active" background="#f2f2f2" @click-tab="totab">
      <van-tab title="宝贝" name="1"></van-tab>
      <van-tab title="评价" name="2"></van-tab>
      <van-tab title="详情" name="3"></van-tab>
      <van-tab title="推荐" name="4"></van-tab>
    </van-tabs>
  </div>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    :line-height="50"
  >
    <van-swipe-item v-for="(item, index) in shopimg" :key="index">
      <img :src="`/images/${item.imgpath}`" alt="" class="swipe-img" />
    </van-swipe-item>
  </van-swipe>
  <div class="content">
    <p class="pricedetails">
      <span><svg
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
      </svg>
      <span class="content-price">5999</span>起 &nbsp;
      品牌钜惠折扣后<svg
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
      </svg>
      <span class="content-price">4999</span>起</span>
      <span>满3000减1000 ></span>
    </p>
    <p class="pricedetails">
      <span><van-icon name="after-sale" /><span>最高享3期免息</span></span>
    </p>
    <div class="shopname" ref="swipeimg">
      <span class="shop-logo" @click="toimg">天猫</span
      ><span class="shopname-title"
        >七彩虹将星x15/x17笔记本RTX4060笔记本独显手提电脑2023新款英特尔酷睿i9-13900hx</span
      >
      <br />
      <span class="sell-title">月销：26</span>
    </div>
    <ExpressPage ref="evaluation" />
    <div class="totop" v-show="istotop" @click="scrolltotop">
      <van-icon name="back-top" />
      <span>顶部</span>
    </div>
  </div>
 </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount,reactive } from "vue";
import ExpressPage from "./ExpressPage.vue";
import scrollIntoView from "scroll-into-view-if-needed";

// 响应式数据
const shopimg = reactive([
  {
    imgpath: "shop1.jpg", // 图片1的路径
  },
  {
    imgpath: "shop2.jpg", // 图片2的路径
  },
  {
    imgpath: "shop3.jpg", // 图片3的路径
  },
  {
    imgpath: "shop4.jpg", // 图片4的路径
  },
  {
    imgpath: "shop5.jpg", // 图片5的路径
  },
]);

const active = ref(5); // 激活的选项卡
const istotop = ref(null); // 是否滚动到顶部
const top = ref(null); // 顶部元素的引用
const scrollTop = ref(window.scrollY); // 滚动位置
const opacity = ref(1); // 透明度

// 滚动事件处理函数
const scroll = () => {
  console.log('11');
  scrollTop.value = window.scrollY;
  if (scrollTop.value < 500) {
    opacity.value = scrollTop.value * 0.002;
  } else {
    opacity.value = 1;
  }
  istotop.value = scrollTop.value > 350;
};

// 点击回到顶部事件处理函数
const scrolltotop = () => {
  toimg();
};

const header = ref(null); // 头部元素的引用

// 滚动到顶部事件处理函数
const toimg = () => {
  console.log(header.value);
  scrollIntoView(header.value, {
    block: "start",
    inline: "center",
  });
};

const evaluation = ref(null); // 评价组件的引用

// 点击到评价区域事件处理函数
const topingjian = () => {
  scrollIntoView(evaluation.value.evaluation1, {
    block: "nearest",
    inline: "center",
  });
};

// 切换选项卡事件处理函数
const totab = ({ name }) => {
  switch (name) {
    case "1":
      toimg();
      break;
    case "2":
      topingjian();
      break;
  }
};

// 组件挂载时绑定滚动事件
onMounted(() => {
  window.addEventListener("scroll", scroll);
  scroll();
});

// 组件卸载时移除滚动事件绑定
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scroll);
});
</script>

<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 50px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  z-index: 500;
  margin: 0;
}
.swipe-img {
  width: 100%;
  height: auto;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #39a9ed;
  display: flex;
  align-items: center;
  z-index: 1000;
}
.header span {
  color: #fff;
  font-size: 20px;
  margin: 0 30px;
}
.content {
  position: relative;
  width: 100%;
  background-color: #fff;
  border: 10px solid #fff;
  /* 边框计算到元素内部 */
  box-sizing: border-box;
}
.top {
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  z-index: 502;
  position: fixed;
  top: 0px;
  left: 0;
  opacity: 0;
}
.icon-1 {
  color: black;
  font-size: 20px;
  position: fixed;
  top: 16px;
  left: 0;
  z-index: 503;
}
.top-input {
  width: 50%;
  height: 1.5rem;
  border-radius: 10px;
  border: none;
  /* 被选中效果 */
  outline: none;
  margin: 13px 25px;
  display: block;
  padding-left: 20px;
  font-size: 20px;
  background-color: #fff;
}
.van-tabs__line {
  bottom: 25px;
}
.content-price {
  font-size: 20px;
}
.pricedetails {
  color: #d87241;
  display:flex;
  /* 两端对齐 */
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
  font-size: 12px;
}
.shop-logo {
  border-radius: 0.5rem;
  background-color: red;
  color: #fff;
  padding: 0.2rem;
}
.shopname {
  width: 100%;
  font-size: 17px;
}
.shopname-title {
  font-weight: bold;
  text-overflow: ellipsis;
}
.sell-title {
  display: block;
  font-size: 12px;
  color: #999;
  height: 20px;
  width: 100%;
}
.totop {
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #999;
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #fff;
}
.shopwindow {
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  display: scroll;
}
</style>


<!-- <style scoped>
.my-swipe .van-swipe-item{z-index:500;color:#fff;text-align:center;font-size:20px;line-height:150px;margin:50px 0 0;background:#39a9ed;}
.address-info{color:#999;font-size:15px;}.arrow{position:absolute;top:20px;right:0;color:#999;font-size:20px;}.content{position:relative;box-sizing:border-box;width:100%;height:1000px;border:20px solid #fff;background:#fff;}.content-price{font-size:20px;}.express{position:relative;display:flex;}.express-info{margin-left:10px;line-height:30px;}.express-info > p > span:nth-child(1){font-weight:700;}.express-info > p > span:nth-child(2){margin-left:16px;}.guarantee p,.type p,.disposition p{margin-left:10px;}.guarantee,.type,.disposition{position:relative;display:flex;margin-top:10px;height:60px;line-height:60px;}.header{z-index:1000;display:flex;width:100%;height:50px;align-items:center;background:#39a9ed;}.header span{color:#fff;font-size:20px;margin:0 30px;}.icon{color:#999;font-size:30px;line-height:60px;}.icon-1{position:fixed;top:16px;left:0;z-index:503;color:#000;font-size:20px;}.pricedetails{display:block;height:30px;color:#d87241;font-size:12px;line-height:30px;}.sell-title{display:block;width:100%;height:20px;color:#999;font-size:12px;}.shop-logo{border-radius:.5rem;color:#fff;padding:.2rem;background:red;}.shopname{width:100%;height:100px;font-size:17px;line-height:25px;}.shopname-title{text-overflow:ellipsis;font-weight:700;}.swipe-img{width:100%;height:550px;}.top{position:fixed;top:0;left:0;z-index:501;width:100%;height:100px;background:#f2f2f2; display: none;}.top-input{display:block;padding-left:20px;width:50%;height:1.5rem;outline:none;border:none;border-radius:10px;font-size:20px;margin:13px 25px;background:#fff;}.van-tabs__line{bottom:25px;};</style> -->