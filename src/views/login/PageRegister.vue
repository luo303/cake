<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { uselogin } from '@/api/user'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()
const router = useRouter()
const username = ref('')
const pwd = ref('')
const nameerror = ref('')
const pwderror = ref('')
const namevalidate = () => {
  const reg = /^[a-zA-Z0-9-_]{6,10}$/
  if (!reg.test(username.value)) {
    nameerror.value = '请输入合法的用户名'
    return false
  }
  nameerror.value = ''
  return true
}
const pwdvalidate = () => {
  const reg = /^[a-zA-Z0-9]{6,16}$/
  if (!reg.test(pwd.value)) {
    pwderror.value = '请输入合法的密码'
    return false
  }
  pwderror.value = ''
  return true
}
const validate = async () => {
  const one = namevalidate()
  const two = pwdvalidate()
  if (one && two) {
    try {
      const res = await uselogin({ username: username.value, pwd: pwd.value })
      userStore.settoken(res.data.token)
      ElMessage({ message: res?.data.message || '登录成功', type: 'success' })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<template>
  <div class="login tab" data-ad="2">
    <div class="back" @click="router.push('/content/container')">返回首页</div>
    <div class="denglu">
      <h5>欢迎登录</h5>
      <div class="name">
        <input
          name="myname"
          type="text"
          placeholder="请输入用户名"
          v-model="username"
          @blur="namevalidate"
        />
        <span>{{ nameerror }}</span>
      </div>
      <div class="password">
        <input
          name="password"
          type="password"
          placeholder="请输入密码"
          v-model="pwd"
          @blur="pwdvalidate"
        />
        <span>{{ pwderror }}</span>
      </div>
      <button @click="validate">立即登录</button>
      <div class="add">
        没有帐号，<a href="#" @click.prevent="router.push('/login')"
          >点击注册</a
        >
      </div>
    </div>
  </div>
</template>
