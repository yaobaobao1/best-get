<template>
    <router-link :to='path' class="xtx-more">
        <span>查看全部</span>
        <i class="iconfont icon-angle-right"></i>
    </router-link>
</template>

<script>
export default {
  name: 'XtxMore',
  props: {
    path: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/mixins.less';
@import '../../assets/styles/variables.less';
@import '../../assets/styles/common.less';
.xtx-more{
    margin-bottom: 2px;
    span{
        font-size: 16px;
        vertical-align: middle;
        margin-right: 4px;
        color: #999;
    }
    i{
        font-size: 14px;
        vertical-align: middle;
        position: relative;
        top: 2;
        color: #ccc;
    }
      &:hover {
    span,i {
      color: @xtxColor;
    }
  }
}
</style>
