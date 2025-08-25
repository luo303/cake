<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { UpdateProfile } from '@/api/user'
import { ElMessage } from 'element-plus'
const userstore = useUserStore()
const form = ref({
  id: userstore.user.id,
  username: userstore.user.username,
  nickname: '',
  email: ''
})
const rules = {
  nickname: [
    {
      required: true,
      message: '请输入用户昵称',
      trigger: 'blur'
    },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称必须是2-10位的非空字符串',
      trigger: 'blur'
    }
  ],
  email: [
    {
      required: true,
      message: '请输入电子邮箱',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '邮箱格式不对',
      trigger: 'blur'
    }
  ]
}
const formref = ref()
const onSubmit = async () => {
  const valid = await formref.value.validate()
  if (valid) {
    await UpdateProfile({
      id: form.value.id,
      username: form.value.username,
      nickname: form.value.nickname,
      email: form.value.email
    })
    await userstore.getUserInfo()
    formref.value.resetFields()
    ElMessage.success('修改成功')
  }
}
const onReset = () => {
  formref.value.resetFields()
}
</script>
<template>
  <page-container title="基本资料">
    <el-form
      ref="formref"
      :rules="rules"
      :model="form"
      label-width="auto"
      style="max-width: 600px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </page-container>
</template>
<style>
.button {
  padding-left: 200px;
}
.el-button {
  margin: 0 25px;
}
</style>
