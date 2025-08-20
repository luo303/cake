<script setup>
import img1 from '@/assets/b01.jpg'
import img2 from '@/assets/b02.jpg'
import img3 from '@/assets/b03.jpg'
import img4 from '@/assets/b04.jpg'
import img5 from '@/assets/b05.jpg'
import img6 from '@/assets/b06.jpg'
import img7 from '@/assets/b07.jpg'
import img8 from '@/assets/b08.jpg'
import img9 from '@/assets/b09.jpg'
const imageList = [
  { image: img1, alt: 'img1' },
  { image: img2, alt: 'img2' },
  { image: img3, alt: 'img3' },
  { image: img4, alt: 'img4' },
  { image: img5, alt: 'img5' },
  { image: img6, alt: 'img6' },
  { image: img7, alt: 'img7' },
  { image: img8, alt: 'img8' },
  { image: img9, alt: 'img9' }
]
</script>
<template>
  <div class="shouye tab" data-ad="0">
    <!-- 返回顶部开始 -->
    <div class="d">
      <span>^</span>
      <span>顶部</span>
    </div>
    <!-- 返回顶部结束 -->
    <!-- 轮播图制作开始 -->
    <ComCarousel :items="imageList"></ComCarousel>
    <!-- 轮播图制作结束 -->
    <!-- 商品展示开始 -->
    <h5>--商品展示--</h5>
    <div class="items w">
      <div class="item">
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_1.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_2.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_3.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_4.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_5.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_7.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_8.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_9.jpg" style="width: 100%" />
        </el-card>
        <el-card style="max-width: 300px">
          <template #header>Yummy hamburger</template>
          <img src="@/assets/desktop_1.jpg" style="width: 100%" />
        </el-card>
      </div>
    </div>
    <!-- 商品展示结束 -->
  </div>
</template>
<style scoped>
.el-card {
  margin: 10px 10px;
}
</style>
