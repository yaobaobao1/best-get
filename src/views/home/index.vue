<template>
    <div class="home-entry">
        <div class="container">
        <!-- 左侧分页 -->
        <HomeCategory/>
        <!-- 轮播图 -->
        <HomeBanner/>
        </div>
        <!-- 新鲜好物  -->
        <HomeNew/>
        <!-- 人气推荐 -->
        <HomeHot/>
        <!-- 品牌组件  -->
        <HomeBrand/>
        <!-- 产品区块 -->
        <HomeProduct/>
        <!-- 最新专题 -->
        <HomeSpecial/>
    </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/mixins.less';
.container{
    .hoverShadow();
}
</style>
