<template>
    <!-- 顶部 -->
    <AppNavbar/>
    <!-- 头部 -->
    <AppHeader/>
    <!-- 吸顶头部 -->
    <AppHeaderSticky />
    <!-- 内容容器 -->
    <div class="app-body">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <AppFooter/>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'LayOut',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  // 获取数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
.app{
  min-height: 600px;
}
</style>
