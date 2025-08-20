<script setup>
import '@/assets/base.css'
</script>
<template>
  <div class="nav">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          default-active="/content/container"
          router
        >
          <el-menu-item index="/content/container">首页</el-menu-item>
          <el-menu-item index="/content/cake">蛋糕</el-menu-item>
          <el-menu-item index="/content/west">西点</el-menu-item>
          <el-menu-item index="/content/normal">常识</el-menu-item>
          <el-menu-item index="/login">注册</el-menu-item>
          <el-menu-item index="/register">登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-menu {
  width: 100%;
  padding-left: 50%;
}
.el-header {
  padding: 0;
}
.el-menu--horizontal > .el-menu-item {
  margin: 0 20px;
}
</style>
