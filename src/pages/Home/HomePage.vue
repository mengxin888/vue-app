<template >
  <div class="header">
    <div class="header-top">
      <span><van-icon name="arrow-left" />返回</span><span>xxx</span>
    </div>
    <div class="search-input">
      <input type="text" name="" id="" v-model="sp"/> <button>搜索</button>
    </div>
  </div>
  <div class="content">
    <div class="content-titles">
      <van-swipe
        class="my-swipe"
        indicator-color="white"
        :loop="false"
        :show-indicators="false"
        >
        <van-swipe-item v-for="(list, index) in state1" :key="index">
          <ul style="height: 100%;">
            <li v-for="item in list" :key="item.id" class="content-titles-li" @click="tosp(item.title)">
              <img
                class="content-titles-img"
                :src="`./images/${item.imgpath}`"
                alt=""
              />
              <span class="content-titles-title">{{ item.title }}</span>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content-tabs">
      <van-tabs v-model:active="active">
        <van-tab title="标签 1" class="content-items"
          ><div class="content-items-item" @click="toShopPage(1)">
            <img src="./diaonao.jpg" alt="" />
            <div class="content-items-item-title">
              <p class="item-title">
                K7 PLUS 17.3英寸13代酷睿i9-13900hx游戏本RTX4090
              </p>
              <span class="item-title1">6人评价“很厚实”</span>
              <span class="item-title4"
                ><svg
                  t="1688972036843"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2302"
                  width="10"
                  height="16"
                >
                  <path
                    d="M857.599993 12.8C844.799994 0 819.199994 0 806.399994 19.2L512 358.399993 217.600006 19.2C204.800006 0 179.200006 0 166.400007 12.8 147.200007 25.6 147.200007 51.199999 160.000007 63.999999l268.799995 307.199994L230.400005 371.199993C211.200006 377.599993 192.000006 390.399992 192.000006 415.999992s19.2 38.399999 38.399999 38.399999l243.199995 0 0 147.199997L230.400005 601.599988C211.200006 601.599988 192.000006 614.399988 192.000006 639.999988s19.2 38.399999 38.399999 38.399999l243.199995 0 0 307.199994C473.600001 1004.799981 492.8 1023.99998 512 1023.99998s38.399999-19.2 38.399999-38.399999l0-307.199994 243.199995 0c19.2 0 38.399999-19.2 38.399999-38.399999s-19.2-38.399999-38.399999-38.399999L550.399999 601.599988 550.399999 454.399991l243.199995 0c19.2 0 38.399999-19.2 38.399999-38.399999s-19.2-38.399999-38.399999-38.399999L595.199998 377.599993 863.999993 63.999999C876.799993 51.199999 876.799993 25.6 857.599993 12.8z"
                    p-id="2303"
                    fill="#d81e06"
                  ></path>
                </svg>
                <span class="item-title2">4799</span
                ><span class="item-title3">券后价</span>
                <span class="item-title5">60人付款</span></span>
              <span class="item-title6">
              <span class="item-title7 item-title11">广告</span>
              <span class="item-title9 "><span class="item-title8 item-title11">分期免期</span>&nbsp;3期</span>
              <span class="item-title10 item-title11">赠运费险</span>
              <span class="item-title10 item-title11">包邮</span></span>
            </div>
          </div></van-tab>
        <van-tab title="标签 2" class="content-items">内容 2</van-tab>
        <van-tab title="标签 3" class="content-items">内容 3</van-tab>
        <van-tab title="标签 3" class="content-items">内容 3</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive, computed,ref } from "vue";
let sp=ref('')
let state = reactive([
  {
    id: 1,
    imgpath: "chufang.png",
    title: "厨房用品",
  },
  {
    id: 2,
    imgpath: "dashangchengshouye.png",
    title: "大商城首页",
  },
  {
    id: 3,
    imgpath: "gerenqingjie.png",
    title: "个人清洁",
  },
  {
    id: 4,
    imgpath: "jingpingtushu.png",
    title: "精品图书",
  },
  {
    id: 5,
    imgpath: "muyingqinzi.png",
    title: "母婴亲子",
  },
  {
    id: 6,
    imgpath: "shenghuojiadian.png",
    title: "生活家电",
  },
  {
    id: 7,
    imgpath: "wenyuteshe.png",
    title: "文娱特色",
  },
]);
const tosp=(value) => {
  sp.value=value
};
const userouter=useRouter()
let active = 0;
const arr = (array, groupSize) => {
  //数组长度
  // let len=arr.length/6;
  const result = [];
  let index = 0;

  while (index < array.length) {
    const group = array.slice(index, index + groupSize);
    result.push(group);
    index += groupSize;
  }
  return result;
};
const state1 = computed(() => {
  return arr(state, 6);
});
const toShopPage = (id) => {
  
  console.log(id,userouter);
  userouter.push({
    path: "/shop",
    query: {
      id: id,
    },
  });
};
</script>

<style scoped>
.content-items {
  height: 71.53%;
  padding: 0.5rem 1rem;
  width: 100%;
}
.content-items-item {
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  height: 8rem;
  width: 100%;
}
.content-items-item > img {
  border-radius: 0.5rem;
  height: 8rem;
  margin: 0 0 0 0.5rem;
  width: 8rem;
}
.content-items-item-title {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-left: 1rem;
  width: 100%;
}
.content-tabs {
  height: 3.76%;
  margin-top: -1rem;
  width: 100%;
}
.content-titles {
  height: 20%;
  width: 100%;
  min-height: 130px;
  
}
.content-titles > ul {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.content-titles-li{
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 33%;
}
.content-titles-img {
  height: 2rem;
  width: 2rem;
}
.content-titles-title {
  font-size: 12px;
}
.header {
  background-image:linear-gradient(yellow, #fff);
  /* height: 12%; */
  width: 100%;
  min-height:100px;
}
.header-top span {
  color: #333;
  font-size: 14px;
  padding: 10px;
}
.item-title {
  color: #a09f9b;
  font-size: 1rem;
  font-weight: 700;
}
.item-title1 {
  color: #dbb07e;
  font-size: 0.1rem;
  font-weight: 700;
}
.item-title10 {
  border: 0.0025rem solid #d8a882;
  color: #d8a882;
  margin-left: 0.3rem;
}
.item-title11 {
  border-radius: 0.1rem;
  font-size: 0.5rem;
  padding: 0.1rem;
}
.item-title2 {
  color: #e57f47;
  font-size: 1.5rem;
}
.item-title3 {
  color: #dbb07e;
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 0.3rem;
}
.item-title4 {
  align-items: center;
  display: flex;
  margin-top: 0.5rem;
}
.item-title5 {
  color: #9b9b9b;
  font-size: 0.7rem;
  margin-left: 0.3rem;
}
.item-title6 {
  align-items: center;
  display: flex;
  margin-top: -0.5rem;
}
.item-title7 {
  border: 0.0025rem solid #ececec;
  color: #ececec;
}
.item-title8 {
  background-color: #f5043e;
  color: #ececec;
  display: inline-block;
  height: 100%;
}
.item-title9 {
  background-color: #dbb47a;
  border-radius: 0.1rem;
  color: #ececec;
  font-size: 0.5rem;
  margin-left: 0.3rem;
  padding-right: 0.2rem;
}
.my-swipe {
  height: 100%;
}
.search-input {
  border: 0.5px solid #ccc;
  border-radius: 15px;
  height: 30px;
  margin: -10px auto;
  position: relative;
  width: 90%;
}
.search-input button {
  background: #fff;
  background-color: #ffffcf;
  border-left: 0.5px solid #ccc;
  border-radius: 15px;
  font-size: 12px;
  height: 100%;
  line-height: 30px;
  position: absolute;
  right: 0;
  width: 45px;
}
.search-input input {
  background: inherit;
  border: none;
  height: 30px;
  left: 10px;
  line-height: 30px;
  position: absolute;
  width: 90%;
}.header-top {
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;
}
</style>
 