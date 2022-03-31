<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="profile.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user">{{profile.account}}</i></a></li>
                    <li><a href="javascript:;" @click="logout()">退出登录</a></li>
                </template>
                <template v-else>
                    <li><router-link to='/login'>请先登录</router-link></li>
                    <li><router-link to='/register'>免费注册</router-link></li>
                </template>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员中心</a></li>
                <li><a href="javascript:;">帮助中心</a></li>
                <li><a href="javascript:;">关于我们</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-phone">手机版</i></a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'AppTopnav',
  setup () {
    // 获取用户的登录信息才能控制切换导航菜单
    const store = useStore()
    // 使用vuex中的state需要设置计算属性
    const profile = computed(() => {
      return store.state.user.profile
    })

    // 退出登录
    // 清空本地登录信息和vuex的用户信息
    // 跳转登录
    const router = useRouter()
    const logout = () => {
      store.commit('user/setUser', {})
      router.push('/')
    }
    return { profile, logout }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/mixins.less';
@import '../assets/styles/variables.less';
@import '../assets/styles/common.less';
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
// ~  选择器作用： 选择当前选择器后所有的元素
</style>
