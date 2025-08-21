<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useregister } from '@/api/user'
import { ElMessage } from 'element-plus'
const router = useRouter()
const username = ref('')
const pwd = ref('')
const repwd = ref('')
const nameerror = ref('')
const pwderror = ref('')
const repwderror = ref('')
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
const repwdvalidate = () => {
  if (repwd.value !== pwd.value) {
    repwderror.value = '两次密码不一致'
    return false
  }
  repwderror.value = ''
  return true
}
const validate = async () => {
  const one = namevalidate()
  const two = pwdvalidate()
  const three = repwdvalidate()
  if (one && two && three) {
    try {
      const res = await useregister({
        username: username.value,
        pwd: pwd.value,
        repwd: repwd.value
      })
      ElMessage({ message: res?.data.message || '注册', type: 'success' })
      router.push('/register')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<template>
  <div>
    <div class="register" data-ad="1">
      <div class="back" @click="router.push('/content/container')">
        返回首页
      </div>
      <div class="zhuce">
        <h5>免费注册</h5>
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
        <div class="repassword">
          <input
            name="repassword"
            type="password"
            placeholder="请再次输入密码"
            v-model="repwd"
            @blur="repwdvalidate"
          />
          <span>{{ repwderror }}</span>
        </div>
        <button @click="validate">立即注册</button>
        <div class="add">
          已有帐号，<a href="#" @click.prevent="router.push('/register')"
            >点击登录</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
