<template>
    <div class="register">
        <LoginHeader>欢迎注册</LoginHeader>
        <section class="register-from">
          <div class="wrapper">
            <RegisterFrom/>
          </div>
        </section>
        <LoginFooter />
    </div>
</template>

<script>
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
import RegisterFrom from './components/register-from.vue'
export default {
  name: 'XtxRegister',
  components: { LoginHeader, LoginFooter, RegisterFrom }
}
</script>

<style lang="less" scoped>
.register-from{
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
    }
}
</style>
