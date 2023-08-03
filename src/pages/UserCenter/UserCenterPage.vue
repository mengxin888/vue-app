<template>
  <div class="header"></div>
  <div class="user">
    <img class="avatar-img" src="../Home/diaonao.jpg" alt="" />
    <p class="user-name"><span>xxx</span><span>xxxxxx公司</span></p>
  </div>
  <div class="content">
    <p class="content-item">地址信息 <van-icon name="arrow" class="arrow" /></p>
    <p class="content-item">版本号 <van-icon name="arrow" class="arrow" /></p>
  </div>
  <div class="scroll-box" ref="scrollbox">
    <div class="records" ref="scrollcontentbox">
      <div class="records-items">
        <van-icon name="shop" class="records-icon" /><span>未发货</span>
      </div>
      <div class="records-items">
        <van-icon name="cart" class="records-icon" /><span>已发货</span>
      </div>
      <div class="records-items">
        <van-icon name="bag-o" class="records-icon" /><span>已送达</span>
      </div>
      <div class="records-items">
        <van-icon name="shop-o" class="records-icon" /><span>未评价</span>
      </div>
      <div class="records-items">
        <van-icon name="shop-o" class="records-icon" /><span>已评价</span>
      </div>
      <div class="records-items">
        <van-icon name="bag-o" class="records-icon" /><span>已送达</span>
      </div>
      <div class="records-items">
        <van-icon name="shop-o" class="records-icon" /><span>未评价</span>
      </div>
      <div class="records-items">
        <van-icon name="shop-o" class="records-icon" /><span>已评价</span>
      </div>
      <div class="records-items">
        <van-icon name="shop-o" class="records-icon" /><span>已评价</span>
      </div>
    </div>
  </div>
  <div class="scroll-strip"><div class="scroll-strip-line" ref="scrollstripline"></div></div>
  <button class="btn">切换账号</button>
  <button class="btn">退出登录</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let  scrollcontentbox= ref(null);
let scrollstripline  = ref(null);
let scrollbox = ref(null);
// 计算滚动条的位置
const scroll = () => {
  let a = scrollbox.value.scrollLeft / scrollbox.value.scrollWidth;
  scrollstripline.value.style.left = `${a * 100}%`;
};
// 计算滚动条的宽度
const init = () => {
  // 减去30是因为外边距的宽度是30px
  let scrollstriplinewidth = (window.innerWidth - 30) / scrollcontentbox.value.offsetWidth;
  scrollstripline.value.style.width = `${scrollstriplinewidth * 100}%`;
  scrollbox.value.addEventListener("scroll", scroll);
};

onMounted(() => {
  // 组件挂载时绑定滚动事件
  init();
});
</script>

<style scoped>
.user {
  height: 80px;
  margin: 10px;
  background-color: red;
  border-radius: 15px;
  position: relative;
}
.avatar-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
  border: 5px solid #fff;
}
.user-name {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  right: 50px;
}
.content-item {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-item:nth-child(4) {
  border-bottom: none;
}
.content {
  margin: 10px;
  border-radius: 15px;
  /* 渐变黄变白 */
  background-image: linear-gradient(to left top, yellow, #fff);
  padding: 10px;
}
.header {
  height: 30px;
  background-color: turquoise;
}
.btn {
  display: block;
  margin: 5px auto;
  padding: 10px;
  background-color: turquoise;
  border-radius: 5px;
}
.records {
  display: inline-flex;
}
.records-icon {
  display: flex;
  /* 方向 */
  margin: 0 auto;
}
.records-items {
  width: calc(calc(100vw - 25px) / 4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.scroll-box {
  height: 50px;
  margin: 0 10px;
  padding: 5px;
  background-color: yellow;
  border-radius: 15px;
  overflow-x: scroll;
  scrollbar-width: none;
  /* 隐藏滚动条 */
  -ms-overflow-style: none;
  

}
.scroll-strip {
  width: 60px;
  height: 5px;
  background-color: #fff;
  border-radius: 5px;
  margin:auto;
  position: relative;
  top: -10px;
}
.scroll-strip-line{
  width: 20px;
  height: 5px;
  background-color: turquoise;
  border-radius: 5px;
  animation: scroll 2s infinite;
  position: absolute;
}
</style>