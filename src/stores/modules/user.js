import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cake',
  () => {
    const token = ref('')
    const settoken = (t) => {
      token.value = t
    }
    return {
      token,
      settoken
    }
  },
  {
    persist: {
      key: 'cake'
    }
  }
)
