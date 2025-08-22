import request from '@/utils/request'

export const useregister = async ({ username, pwd, repwd }) => {
  const res = await request.post('/api/reg', {
    username,
    password: pwd,
    repassword: repwd
  })
  if (res.data.code !== 0) {
    // 当后端返回失败（如用户名已存在），主动抛出错误
    throw new Error(res.data.message) // 触发 catch
  }
  return res
}
export const uselogin = async ({ username, pwd }) => {
  const res = await request.post('/api/login', {
    username,
    password: pwd
  })
  if (res.data.code !== 0) {
    // 当后端返回失败（如用户名已存在），主动抛出错误
    throw new Error(res.data.message) // 触发 catch
  }
  return res
}
export const getUser = () => request.get('/my/userinfo')
