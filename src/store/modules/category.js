// 分类信息
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/categroy'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合依赖topCategroy重新设置，保证初始化数据 不至于白屏
      list: topCategory.map(item => ({
        name: item
      }))
    }
  },
  // 修改分类函数
  mutations: {
    setList (state, payload) {
      // payload所有的分类集合
      state.list = payload
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
