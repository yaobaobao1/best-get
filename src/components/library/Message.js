//  提供一个能够显示xtx-message 组件的函数
//  这个函数将来：导入直接使用 也可以挂载在vue实例原型上
//  import Massage from 'Message.js' 使用 MessageChannel({type: 'error', text: "提示文字"})
//  this.$message({type: 'error', text: "提示文字"})

import { createVNode, render } from 'vue'
import XtxMessage from './xtx-message.vue'

//  准备一个装载信息提示的组件DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)

//  定时器标识
let timer = null

export default ({ type, text }) => {
  //  渲染组件
  //  导入信息提示的组件  将信息提示组件转编译为虚拟节点
  //  createVNode(组件，属性对象)
  const vnode = createVNode(XtxMessage, { type, text })
  //  将虚拟节点渲染到容器中
  //  render(虚拟节点，DOM容器)
  render(vnode, div)

  //  三秒后销毁
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 3000)
}
