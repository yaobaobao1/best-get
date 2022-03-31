<template>
    <div class="page-login">
        <LoginHeader>欢迎登入</LoginHeader>
        <section class="login-section">
          <div class="wrapper">
            <nav>
              <a href="javascript:;" @click="activeName ='account'" :class="{active:activeName ==='account'}">账户登入</a>
              <a href="javascript:;" @click="activeName ='qrcode'" :class="{active:activeName ==='qrcode'}">扫码登入</a>
            </nav>
           <LoginFrom v-if="activeName==='account'">表单</LoginFrom>
            <!-- 二维码 -->
            <div v-if="activeName==='qrcode'" class="qrcode-box">
              <img src="@/assets/images/qrcode.jpg" alt="">
              <p>打开<a href="javascript:;">小兔鲜App</a>扫码登入</p>
            </div>
          </div>
        </section>
        <LoginFooter />
    </div>
</template>

<script>
import { ref } from 'vue'
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
import LoginFrom from './components/login-from.vue'
export default {
  name: 'PageLogin',
  components: { LoginHeader, LoginFooter, LoginFrom },
  setup () {
    const activeName = ref('account')
    return { activeName }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/mixins.less';
@import '../../assets/styles/variables.less';
@import '../../assets/styles/common.less';
.login-section{
  background: url(../../assets/images/login-bg.png) no-repeat center/ cover;
  height: 488px;
  position: relative;
  .wrapper{
    width: 380px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px,0,0);
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    nav{
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        &:first-child {
          border-right: 1px solid #f5f5f5;
          text-align: left;
        }
        &.active{
          color: @xtxColor;
          font-weight: bold;
        }
      }
    }
  }
}
// 二维码的样式
.qrcode-box{
  text-align: center;
  padding-top: 40px;
  p{
    margin-top: 20px;
    a{
      color: @xtxColor;
      font-size: 16px;
    }
  }
}
</style>
