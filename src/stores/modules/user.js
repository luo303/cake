import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUser } from '@/api/user'

export const useUserStore = defineStore(
  'cake',
  () => {
    const token = ref('')
    const settoken = (t) => {
      token.value = t
    }
    const user = ref({})
    const getUserInfo = async () => {
      const res = await getUser()
      user.value = res.data.data
      console.log(user.value)
    }
    return {
      token,
      settoken,
      user,
      getUserInfo
    }
  },
  {
    persist: {
      key: 'cake'
    }
  }
)
