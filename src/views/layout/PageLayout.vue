<script setup>
import '@/assets/base.css'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
const userstore = useUserStore()
onMounted(() => {
  userstore.getUserInfo()
})
</script>
<template>
  <div class="nav">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          default-active="/content/container"
          :ellipsis="false"
          router
        >
          <div class="name">
            黑马程序员：{{
              userstore.user?.nickname || userstore.user?.username
            }}
          </div>
          <el-menu-item index="/content/container">首页</el-menu-item>
          <el-menu-item index="/content/cake">蛋糕</el-menu-item>
          <el-menu-item index="/content/west">西点</el-menu-item>
          <el-menu-item index="/content/normal">常识</el-menu-item>
          <el-menu-item index="/login">注册</el-menu-item>
          <template v-if="userstore.token">
            <el-menu-item index="/register">切换账号</el-menu-item>
          </template>
          <template v-else>
            <el-menu-item index="/register">登录</el-menu-item>
          </template>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-menu {
  width: 100%;
}
.el-header {
  padding: 0;
}
.el-menu--horizontal > .el-menu-item {
  margin: 0 20px;
}
.el-menu-demo {
  padding-left: 50%;
}
.name {
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  line-height: 60px;
  left: 70px;
}
</style>
