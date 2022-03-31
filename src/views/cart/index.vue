<template>
    <div class="xtx-cart-page">
        <div class="container">
            <XtxBread>
                <XtxBreadItem to="/">首页</XtxBreadItem>
                <XtxBreadItem>购物车</XtxBreadItem>
            </XtxBread>
            <div class="cart">
                <table>
                    <thead>
                        <tr>
                            <th width='120'>全选</th>
                            <th width='400'>商品信息</th>
                            <th width='220'>单价</th>
                            <th width='180'>数量</th>
                            <th width='180'>小计</th>
                            <th width='140'>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="true">
                            <td colspan="6">
                                <CartNone />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import XtxBread from '@/components/library/xtx-bread.vue'
import XtxBreadItem from '@/components/library/xtx-bread-item.vue'
import CartNone from './components/cart-none'
export default {
  name: 'XtxCartPage',
  components: { XtxBread, XtxBreadItem, CartNone }
}
</script>

<style lang="less" scoped>

</style>
