<template>
  <div class="box">
    <div class="header">
      <span class="header-name">购物车</span>
      <div class="header-adderrs">
        <van-icon name="location-o" /> 配送至：北京市大兴区青云店大东新村47号楼
      </div>
      <div class="header-ellipsis-btn">
        <span class="header-btn">管理</span>
        <van-icon name="ellipsis" class="ellipsis" />
      </div>
    </div>
    <div class="tabs" ref="tabs">
      <span class="tabs-selected">全部x</span><span>降价x</span><span>筛选</span>
    </div>
    <div class="shop-box">
      <div class="company-name">
        <input type="checkbox" name="" id="myCheckbox" class="checkbox" />
        <label for="myCheckbox" class="company-checkbox"
          >戴尔奥莱台式机专卖店<van-icon name="arrow"
        /></label>
      </div>
      <div class="shop-info">
        <input type="checkbox" name="" id="myCheckbox1" class="checkbox" />
        <label for="myCheckbox1" class="shop-checkbox">
          <img
            src="./images/909e445f1a0620a1f1b66446f31b233.jpg"
            alt=""
            class="shop-img"
          />
        </label>
        <div class="shop-content">
          <span class="shop-content-name">戴尔dell 灵越3020 台式电脑20</span>
          <span class="shop-content-info"
            >单主机（含键鼠），...，选服务<i></i
          ></span>
          <span class="shop-content-tabs">15天价保</span>
          <div class="price-quantity">
            <span class="price">￥6299.00</span>
            <div class="quantity">
              <button class="quantity-btn" @click.stop="value>1?value--:value">-</button
              ><input
                type="text"
                class="quantity-input"
                v-model="value"
                disabled
              />
              <button class="quantity-btn" @click.stop="value++">+</button>
            </div> 
          </div>
          <div class="promotional">
              <span class="promotional-title">赠品</span>
              <div class="promotional-items">
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
                <p><span>戴尔台式电脑赠品运费险</span><span>x1</span><i></i></p>
              </div>
            </div>
          </div>
      </div>
    </div>
      <h3 class="recommended">你可能还喜欢</h3>
      <div class="recommended-box">
        <div class="recommended-item">
          <img src="./images/909e445f1a0620a1f1b66446f31b233.jpg" alt="">
          <span class="recommended-item-name">火影 T6A 12代i7/RTX4060/4050/满血140W独显</span>
          <span class="recommended-item-price">￥6299.00</span> <span class="recommended-item-logo">到手价</span>
          
        </div>
        <div class="recommended-item">
          <img src="./images/909e445f1a0620a1f1b66446f31b233.jpg" alt="">
          <span class="recommended-item-name">火影 T6A 12代i7/RTX4060/4050/满血140W独显</span>
          <span class="recommended-item-price">￥6299.00</span> <span class="recommended-item-logo">到手价</span>
          
        </div>
        <div class="recommended-item">
          <img src="./images/909e445f1a0620a1f1b66446f31b233.jpg" alt="">
          <span class="recommended-item-name">火影 T6A 12代i7/RTX4060/4050/满血140W独显</span>
          <span class="recommended-item-price">￥6299.00</span> <span class="recommended-item-logo">到手价</span>
        </div>
        <div class="recommended-item">
          <img src="./images/909e445f1a0620a1f1b66446f31b233.jpg" alt="">
          <span class="recommended-item-name">火影 T6A 12代i7/RTX4060/4050/满血140W独显</span>
          <span class="recommended-item-price">￥6299.00</span> <span class="recommended-item-logo">到手价</span>
          
        </div>
      </div>
  </div>
</template>
<script setup>
import { ref,onMounted } from "vue";
let value = ref(1);
let tabs=ref(null);
const tabsSelected = () => {
  // 转换成数组
   Array.from(tabs.value.children).forEach((item) => {
     item.onclick=()=>{
        Array.from(tabs.value.children).forEach((item) => {
          item.classList.remove('tabs-selected')
        });
       item.classList.add('tabs-selected')
      //  切换tab替换数据 时候的逻辑
      // 重新遍历数组过滤数据 替换数据
      // 重新渲染数据 或过度动画
     }
    });
};
onMounted(()=>{
    tabsSelected()
  })
</script>
<style scoped>
.tabs-selected{
  color: red;
  font-weight: bold;
}
.box {
  padding: 10px 10px 0 10px;
  background-color: #f6f6f6;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16px;
  line-height: 16px;
  background-color: inherit;
}
.header-adderrs {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
}
.location-o {
  font-size: 15px;
  color: #999;
}
.header-btn {
  font-weight: bold;
  margin: 0 10px;
  font-size: 15px;
}
.header-name {
  min-width: 60px;
  font-weight: bold;
  font-size: 20px;
}
.header-ellipsis-btn {
  min-width: 68px;
}
.tabs {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: #999;
}
.shop-box {
  width: 100%;
  /* height: 300px; */
  border-radius: 15px;
  background-color: #fff;
  padding-bottom:20px;
}
.company-name {
  padding: 20px 10px;
}
.shop-info {
  padding: 0 10px;
  position: relative;
}
.shop-img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
.shop-checkbox{
  height: auto;
  width: 23%;
}
.checkbox {
  display: none;
}

.checkbox + label {
  position: relative;
  padding-left: 8%;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中对齐 */
}

/* 自定义复选框的外观 */
.checkbox + label:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: 50%; /* 设置为50% */
  transform: translateY(-50%); /* 使用transform进行垂直居中对齐 */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
}

/* 自定义复选框的选中状态 */
.checkbox:checked + label:before {
  background-color: red;
}

/* 隐藏复选框的默认标记 */
.checkbox + label:after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 50%; /* 设置为50% */
  transform: translateY(-50%); /* 使用transform进行垂直居中对齐 */
}

/* 自定义复选框的选中标记 */
.checkbox:checked + label:after {
  content: "\2713";
  color: #fff;
  font-size: 14px;
}
.shop-content {
  display: inline-block;
  width: 65%;
  margin-left: 3%;
  vertical-align: top;
}
.shop-content-name {
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  /* 隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop-content-info {
  display:block;
  font-size: 13px;
  color: #999;
  border-radius: 10px;
  padding: 3px 5px;
  background-color: #f6f6f6;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop-content-tabs {
  display: inline-block;
  font-size: 0.5rem;
  color: red;
  border: 1px solid red;
  border-radius: 5px;
  padding: 1px;
  background-color: #f6f6f6;
  margin: 10px 0;
}
.price-quantity {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 18px;
  font-weight: bold;
  color: red;
}
.quantity-input {
  /* 切换盒模型 */
  box-sizing: border-box;
  width: 33.3%;
  height: 100%;
  text-align: center;
  outline: none;
  background-color: #ffffff;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
}
.quantity-btn{
  display: inline-block;
  width: 33.3%;
  height: 100%;
  /* outline: none; */
}
.quantity{
  display: block;
  border-radius:30px;
  border: 1px solid #ccc;
  width: 90px;
  height: 25px;
}
.promotional{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top:10px;
}
.promotional-title{
  font-size: 15px;
  font-weight: bold;
  
}
.promotional-items{
  width: 80%;
  display: inline-block;
}
.promotional-items>p{
font-size:15px;
display: flex;
justify-content: space-between;
align-items: center;

}
.promotional-items>p>span:nth-child(1){
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommended{
  margin-top:25px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content:center;
}
.recommended-box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
}
.recommended-item{
  width: 48%;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  margin-bottom: 10px;
}
.recommended-item-name{
  margin: 0 5px;
  display: inline-block;
  font-size: 15px;
  word-break: break-all;
  letter-spacing: .5px;

}
.recommended-item-price{
  color:red;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}
.recommended-item-logo{
  position: relative;
  bottom: 5px;
  display: inline-flex;
  height: 25px;
  width: 60px;
  background-color:red;
  margin-left:10px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #fff;
  border-radius: 5px;
  z-index: 1;
}
.recommended-item-logo::before{
  position: absolute;
  content: "";
  bottom:0;
  left: -5px;
  border-width: 0 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent red transparent;
  z-index: -1;
}
.recommended-item-logo::after{
  position: absolute;
  content: "";
  bottom:0;
  right: -6px;
  /* 一个半圆 */
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
  z-index: -1;
}
</style>