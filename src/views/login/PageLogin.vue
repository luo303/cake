<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
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
const validate = () => {
  const one = namevalidate()
  const two = pwdvalidate()
  if (one && two) {
    ElMessage({
      message: '注册成功',
      type: 'success'
    })
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
