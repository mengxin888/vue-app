<template>
  <div class="header">
    <span></span>
    <h3>聊天</h3>
    <span>发起</span>
  </div>
  <div class="content">
    <div class="content-item" v-for="(item, index) in arritems" :key="index">
      <div class="user-avater"></div>
      <div class="right-content">
        <p class="usernametime">
          <span class="username">name</span
          ><span class="useritem">{{ item.time }}</span>
        </p>
        <p><span class="usertext">text</span><i></i></p>
      </div>
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      // 几个对话
      items: 15,
      // 对话数组
      arritems: [],
    };
  },
  methods: {
    // 生成随机时间
    randomDate() {
      const currentDate = new Date();
      const currentTimestamp = currentDate.getTime();
      const randomTimeOffset = Math.floor(Math.random() * 1000000);
      const targetTimestamp = currentTimestamp - randomTimeOffset;
      const targetDate = new Date(targetTimestamp);
      let year = targetDate.getFullYear();
      let month = targetDate.getMonth() + 1;
      let day = targetDate.getDate();
      let hour = targetDate.getHours();
      let minute = targetDate.getMinutes();
      let weekDay = targetDate.getDay();
      let formattedTime = "";
      if (randomTimeOffset > 86400) {
        if (randomTimeOffset > 86400 * 7) {
          formattedTime = `${year}-${month}-${day}`;
        } else {
          const weekDays = [
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
          ];
          formattedTime = weekDays[weekDay];
        }
      } else {
        let b=''
        hour = parseInt(hour);
        hour < 12 ? b="上午" : b="下午";
        hour = hour < 10 ? `"0" + ${hour}` :  hour;
        minute = minute < 10 ? `0+${minute}` : minute;
        formattedTime = `${b}:${hour}:${minute}`;
      }
      this.arritems.push({ time: formattedTime, getTime: randomTimeOffset });
    },
  },
  beforeMount() {
    for (let i = 0; i < this.items; i++) {
      this.randomDate();
    }
    this.arritems.sort((a, b) => {
      return a.getTime - b.getTime;
    });
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* margin: 0 10px; */
  display: flex;
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
  font-size: 18px;
  height: 40px;
  border-bottom: 1px solid #ccc;
  background-color: red;
}
.content {
  position: absolute;
  top: 40px;
  height: calc(100% - 40px);
  z-index: -1;
  padding-left: 10px;
  width: calc(100% - 10px);
}
.content-item {
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
  position: relative;
}
.user-avater {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: inline-block;
}
.usernametime {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* 垂直居中 */
  align-items: center;
}
.username {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}
.useritem {
  font-size: 12px;
  padding-right: 10px;
}
.usertext {
  font-size: 14px;
  margin-left: 10px;
}
.right-content {
  display: inline-flex;
  width: calc(100% - 40px);
  /* 切换主轴 */
  flex-direction: column;
  height: 40px;
  /* 垂直两端对齐 */
  justify-content: space-between;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #ccc;
}
</style>