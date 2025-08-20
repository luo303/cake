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

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>
