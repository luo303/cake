import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'
const instance = axios.create({
  baseURL,
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)
instance.interceptors.response.use(
  (res) => {
    console.log(res)
    if (res?.data.code === 0) {
      return res
    }
    ElMessage({ message: res?.data.message || '服务异常', type: 'error' })
    return Promise.reject(res?.data)
  },
  (err) => {
    console.log(err)
    ElMessage({
      message: err.response?.data.message || '服务异常',
      type: 'error'
    })
    if (err.response?.status === 401) {
      router.push('/register')
    }
    return Promise.reject(err)
  }
)
export default instance
