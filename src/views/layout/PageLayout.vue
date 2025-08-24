<script setup>
import '@/assets/base.css'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import {
  User,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import avatar from '@/assets/default.png'
const userstore = useUserStore()
const router = useRouter()
onMounted(() => {
  userstore.getUserInfo()
})
const handleCommand = async (command) => {
  if (command === 'logout') {
    try {
      await ElMessageBox.confirm('你确定要退出吗?', '温馨提示', {
        type: 'warning',
        confirmBurronText: '确认',
        cancelButtonText: '取消'
      })
      userstore.removetoken()
      userstore.setuser({})
      router.push('/register')
    } catch (error) {
      console.log(error)
    }
  } else {
    router.push(`/user/${command}`)
  }
}
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
            <div>
              理工程序员：{{
                userstore.user?.nickname || userstore.user?.username
              }}
            </div>
            <el-dropdown placement="bottom-end" @command="handleCommand">
              <span class="el-dropdown__box">
                <el-avatar :src="userstore.user.user_pic || avatar" />
                <el-icon><CaretBottom /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile" :icon="User"
                    >基本资料</el-dropdown-item
                  >
                  <el-dropdown-item command="password" :icon="EditPen"
                    >重置密码</el-dropdown-item
                  >
                  <el-dropdown-item command="logout" :icon="SwitchButton"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
<style lang="less" scoped>
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
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 60px;
  left: 70px;
}
.el-dropdown__box {
  display: flex;
  align-items: center;
  .el-icon {
    color: #999;
    margin-left: 10px;
  }

  &:active,
  &:focus {
    outline: none;
  }
}
.example-showcas .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
