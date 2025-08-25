<template>
  <div class="carousel" @mouseover="stop()" @mouseleave="start()">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <img :src="item.image" :alt="item.alt" />
      </div>
    </div>
    <button @click="prev" class="carousel-control prev">&lt;</button>
    <button @click="next" class="carousel-control next">&gt;</button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
  reset()
}

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.items.length) % props.items.length
  reset()
}
let inter = null
const start = () => {
  inter = setInterval(next, 2000)
}
const stop = () => {
  clearInterval(inter)
}
const reset = () => {
  stop()
  start()
}
onMounted(() => {
  start()
})
onBeforeUnmount(() => {
  stop()
})
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 70%;
  height: 350px; /* 根据需要调整高度 */
  margin: 0 auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
}

.carousel img {
  width: 100%;
  height: auto;
}

.carousel img:hover {
  cursor: pointer;
}

/* 箭头按钮样式改进 */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3); /* 半透明黑色背景 */
  color: white; /* 箭头颜色为白色 */
  border: none;
  border-radius: 50%; /* 圆形按钮 */
  width: 50px; /* 固定宽度 */
  height: 50px; /* 固定高度 */
  cursor: pointer;
  font-size: 0; /* 隐藏原始字符 */
  transition: all 0.3s ease; /* 平滑过渡效果 */
  opacity: 0.8; /* 初始透明度 */
  z-index: 10;
}

/* 使用伪元素重新创建箭头 */
.carousel-control::before {
  font-size: 24px; /* 箭头大小 */
  font-weight: bold;
}

.carousel-control.prev::before {
  content: '<'; /* 左箭头 */
}

.carousel-control.next::before {
  content: '>'; /* 右箭头 */
}

/* 悬停效果 */
.carousel-control:hover {
  background: rgba(0, 0, 0, 0.6); /* 加深背景色 */
  transform: translateY(-50%) scale(1.1); /* 轻微放大 */
  opacity: 1; /* 完全不透明 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 增加阴影 */
}

/* 箭头位置微调 */
.carousel-control.prev {
  left: 20px;
  padding-right: 4px; /* 左箭头在圆形中居中 */
}

.carousel-control.next {
  right: 20px;
  padding-left: 4px; /* 右箭头在圆形中居中 */
}

/* 轮播容器美化（新增） */
.carousel {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
