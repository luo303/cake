<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
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
          <input name="myname" type="text" placeholder="请输入用户名" />
          <span></span>
        </div>
        <div class="password">
          <input name="password" type="password" placeholder="请输入密码" />
          <span></span>
        </div>
        <button>立即注册</button>
        <div class="add">
          已有帐号，<a href="#" @click.prevent="router.push('/register')"
            >点击登录</a
          >
        </div>
        <div class="suc">注册成功</div>
      </div>
    </div>
  </div>
</template>
