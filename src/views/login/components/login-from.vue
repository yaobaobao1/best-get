<template>
  <div class="account-box">
    <div class="toggle">
      <a href="javascript:;" v-if="isMsgLogin" @click="isMsgLogin=false">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a href="javascript:;" v-else @click="isMsgLogin=true" >
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <!-- autocomplete="off" 取消自动填充 -->
    <!-- v-slot="{errors}  使用作用域插槽暴露 error 错误对象 -->
    <Form ref="formCom" class="form" :validation-schema="schema" autocomplete="off" v-slot="{errors}">
      <template v-if="!isMsgLogin">
         <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <Field :class="{error:errors.account}" v-model="form.account" name="account" type="text" placeholder="请输入用户名" />
          </div>
          <div class="error" v-if="errors.account">
            <i class="iconfont icon-warning" />
            {{errors.account}}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <Field :class="{error:errors.password}" name="password" v-model="form.password" type="password" placeholder="请输入密码" />
          </div>
          <div class="error" v-if="errors.password">
            <i class="iconfont icon-warning" />
            {{errors.password}}
          </div>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <Field :class="{error:errors.mobile}" name="mobile" v-model="form.mobile" type="text" placeholder="请输入手机号" />
          </div>
          <div class="error" v-if="errors.mobile">
            <i class="iconfont icon-warning" />
            {{errors.mobile}}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <Field :class="{error:errors.code}" name="code" v-model="form.code" type="text" placeholder="请输入验证码" />
            <span class="code">
              发送验证码
            </span>
          </div>
          <div class="error" v-if="errors.code">
            <i class="iconfont icon-warning" />
            {{errors.code}}
          </div>
        </div>
      </template>
      <div class="form-item">
        <div class="agree">
          <XtxCheckbox name="isAgree" :class="{error:errors.isAgree}" v-model="form.isAgree"/>
          <span>我已同意</span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
         <div class="error" v-if="errors.isAgree">
            <i class="iconfont icon-warning" />
            {{errors.isAgree}}
          </div>
      </div>
      <a href="javascript:;" class="btn" @click="login()">登录</a>
    </Form>
    <div class="action">
      <a href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback">
        <img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png" alt="">
      </a>
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <router-link href="javascript:;" to="/register">免费注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import { reactive, ref, watch } from 'vue'
import XtxCheckbox from '@/components/library/xtx-checkbok.vue'
import schema from '@/utils/vee-validation-schema'
export default {
  name: 'LoginForm',
  components: { Form, Field, XtxCheckbox },
  setup () {
    // 切换短信登入
    const isMsgLogin = ref(false)
    // 表单数据对象
    const form = reactive({
      isAgree: true,
      account: null,
      password: null,
      mobile: null,
      code: null
    })
    // vee-validate 校验基本步骤
    // 1.导入 Form Field 组件 将 form 和 input 进行替换 需要加上 name 用来指定将来的校验规则函数
    // 2.Field 需要进行数据绑定  字段的名称最好和后台名称保持一致
    // 3.定义Field的name属性指定的校验规则函数，Form的validation-schema接收定义好的校验规则是对象
    const mySchema = {
      // 校验函数规则 ：返回true就是校验成功，返回字符串校验失败字符串错误提示信息
      account: schema.account,
      password: schema.password,
      mobile: schema.mobile,
      code: schema.code,
      isAgree: schema.isAgree
    }
    // 监听isMsgLogin重置表单
    const formCom = ref(null)
    watch(isMsgLogin, () => {
      // 重置数据
      form.isAgree = true
      form.account = null
      form.password = null
      form.mobile = null
      form.code = null
      // 如果是没有销毁Field组件，之前的校验结果是不会清除  例如：v-show切换的
      // Form组件提供了一个 resetForm 函数清除校验结果
      formCom.value.resetForm()
    })

    // 点击登录的时候整体的表单校验
    const login = async () => {
      // Form组件提供了一个 validate 函数作为整体表单校验，当是返回的是一个promise
      const valid = await formCom.value.validate()
      console.log(valid)
    }
    return { isMsgLogin, form, schema: mySchema, formCom, login }
  }
}
</script>
<style scoped lang="less">
@import '../../../assets/styles/mixins.less';
@import '../../../assets/styles/variables.less';
@import '../../../assets/styles/common.less';
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,&:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
