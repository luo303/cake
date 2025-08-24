<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="card">
    <div class="back" @click="router.push('/content/container')">返回首页</div>
    <el-card style="width: 968px; height: 500px">
      <template #header>
        <div class="card-header">
          <span> {{ title }} </span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>
<style>
.card {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-header {
  font-weight: 700;
  font-size: 15px;
}
</style>
