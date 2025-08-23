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
    const removetoken = () => {
      token.value = ''
    }
    const user = ref({})
    const getUserInfo = async () => {
      const res = await getUser()
      user.value = res.data.data
      console.log(user.value)
    }
    const setuser = (profile) => {
      user.value = profile
    }
    return {
      token,
      settoken,
      user,
      getUserInfo,
      setuser,
      removetoken
    }
  },
  {
    persist: {
      key: 'cake'
    }
  }
)
