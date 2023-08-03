<template>
  <!-- 模板组件重复写css太麻烦啦 -->
  <div class="f-content">
    <div class="f-botton-Line">
      <div class="f-padding-left-right">
        <div class="f-left-content">
          <slot name="left-icon" class="f-right-margin">
          </slot>
          <slot name="title">
          </slot>
        </div>
        <slot name="right-icon">
        </slot>
      </div>
    </div>
    <div class="f-content-text">
      <slot name="tabs" ref="tabs">
      </slot>
      <slot name="content-text"></slot>
    </div>
    <br/>
  </div>
</template>
<script>
//import { ref,reactive,onMounted,computed,watch} from 'vue';
export default {
  setup() {
  
  },
};
</script>
<style scoped>
.f-content {
  width: 100%;
  box-sizing: border-box;
  background-color:#f9f9f9;
}
.f-left-content {
  display: flex;
  align-items: center;
  justify-self: flex-start;
}
.f-botton-Line {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e5e5e5;
}

.f-express-info {
  margin-left: 10px;
}
.f-padding-left-right {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.f-content-text {
  margin-left: 20px;
}
.f-right-margin{
    margin-right: 20px;
}
</style>