<script setup>
import { ref } from 'vue'
import { UpdatePassword } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const userstore = useUserStore()
const router = useRouter()
const form = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})
const formref = ref()
const checkOldName = (rule, value, callback) => {
  if (value === form.value.old_pwd) {
    callback(new Error('新密码和原密码不能一样！'))
  } else {
    callback()
  }
}
const checkNewName = (rule, value, callback) => {
  if (value !== form.value.new_pwd) {
    callback(new Error('两次密码不一致！'))
  } else {
    callback()
  }
}

const rules = {
  // 原密码
  old_pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    }
  ],
  // 新密码
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkOldName, trigger: 'blur' }
  ],
  // 确认新密码
  re_pwd: [
    { required: true, message: '请再次确认新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkNewName, trigger: 'blur' }
  ]
}
const onSubmit = async () => {
  const valid = await formref.value.validate()
  if (valid) {
    await UpdatePassword(form.value)
    userstore.removetoken()
    userstore.setuser({})
    ElMessage({ type: 'success', message: '更换密码成功' })
    router.push('/register')
  }
}
const onReset = () => {
  formref.value.resetFields()
}
</script>
<template>
  <page-container title="重置密码">
    <el-form
      ref="formref"
      :model="form"
      label-width="auto"
      :rules="rules"
      style="max-width: 600px"
    >
      <el-form-item label="原密码" prop="old_pwd" type="password">
        <el-input v-model="form.old_pwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="new_pwd" type="password">
        <el-input v-model="form.new_pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="re_pwd" type="password">
        <el-input v-model="form.re_pwd"></el-input>
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
