<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="login tab" data-ad="2">
    <div class="back" @click="router.push('/content/container')">返回首页</div>
    <div class="denglu">
      <h5>欢迎登录</h5>
      <div class="name">
        <input name="myname" type="text" placeholder="请输入用户名" />
        <span></span>
      </div>
      <div class="password">
        <input name="password" type="password" placeholder="请输入密码" />
        <span></span>
      </div>
      <button>立即登录</button>
      <div class="add">
        没有帐号，<a href="#" @click.prevent="router.push('/login')"
          >点击注册</a
        >
      </div>
      <div class="success">登陆成功</div>
    </div>
  </div>
</template>
