<template>
    <div class="home-hot">
        <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        <div ref="target" style="position: relative;height: 426px;">
            <transition name="fade">
                <router-link to='/'>
                    <ul v-if="list.length" class="good-list">
                        <li v-for="item in list" :key="item.id">
                            <router-link to='/'>
                            <img :src="item.picture" alt="">
                            <p class="name">{{item.title}}</p>
                            <p class="desc">{{item.alt}}</p>
                            </router-link>
                        </li>
                    </ul>
                </router-link>
            </transition>
        </div>
        </HomePanel>
    </div>
</template>

<script>
import HomePanel from './home-panel.vue'
import { findHot } from '@/api/home'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeHot',
  components: { HomePanel },
  setup () {
    const { target, result } = useLazyData(findHot)
    return { list: result, target }
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/mixins.less';
@import '../../../assets/styles/variables.less';
@import '../../../assets/styles/common.less';
.good-list{
    display: flex;
    justify-content: space-between;
    height: 406px;
    li{
        width: 306px;
        height: 406px;
        background-color: #f0f9f4;
        .hoverShadow();
        img{
            width: 306px;
            height: 306px;
        }
        p{
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }
        .desc{
            color: #999;
            font-size: 18px;
        }
    }
}
</style>
