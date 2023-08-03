<template>
  <div :class="isroute?'view':'view1'"><router-view></router-view></div>
<TabBar v-if="isroute" />
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import TabBar from './components/TabBar/TabBar.vue';
export default {
  name: 'App',
  components: {
    TabBar
  },
setup() {
    const route = useRoute();
    const isroute = computed(() => {
      return (
        route.path === '/home' ||
        route.path === '/cart' ||
        route.path === '/order' ||
        route.path === '/usercenter'
      );
    });
    
    return {
      isroute
    };
  }
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.view{
  height: 87.5%;
  /* 开启滚动 */
  overflow-y: scroll;
  z-index: 1;
}
.view1{
  /* 开启滚动 */
  overflow-y: scroll;
  z-index: 1;
}
</style>
