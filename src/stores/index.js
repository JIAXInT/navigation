import { createPinia, defineStore } from 'pinia'

const pinia = createPinia()

const useStore = defineStore('storeId', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
})

export default pinia