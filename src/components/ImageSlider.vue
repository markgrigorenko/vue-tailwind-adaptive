<template>
  <div class="relative w-full max-w-lg mx-auto">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full flex items-center justify-center"
        >
          <img
            v-if="index === 0"
            :src="image.src"
            :alt="image.alt"
            class="bg-cover bg-center bg-[url('../assets/slider_bg_custom.png')]"
          />
          <img
            v-else
            :src="image.src"
            :alt="image.alt"
            class="bg-cover bg-center bg-[url('../assets/slider_bg.png')]"
          />
        </div>
      </div>
    </div>

    <!-- Dots and Navigation Buttons -->
    <div class="flex items-center justify-center mt-4 space-x-2">
      <button
        class="bg-[#313131] rounded-full shadow-lg text-white"
        :class="{ 'opacity-50 cursor-not-allowed': activeIndex === 0 }"
        @click="prevSlide"
        :disabled="activeIndex === 0"
      >
        <img src="@/assets/slider_left.svg" />
      </button>

      <div class="flex space-x-2 px-2">
        <span
          v-for="(dot, index) in images"
          :key="index"
          class="w-2 h-2 rounded-full cursor-pointer"
          :class="{
            'bg-gray-400': activeIndex !== index,
            'bg-[#313131]': activeIndex === index,
          }"
          @click="goToSlide(index)"
        ></span>
      </div>

      <button
        class="bg-[#313131] rounded-full shadow-lg text-white"
        :class="{
          'opacity-50 cursor-not-allowed': activeIndex === images.length - 1,
        }"
        @click="nextSlide"
        :disabled="activeIndex === images.length - 1"
      >
        <img src="@/assets/slider_right.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      images: [
        { src: require('../assets/slider_1.svg'), alt: 'Image 1' },
        { src: require('../assets/slider_2.svg'), alt: 'Image 2' },
        { src: require('../assets/slider_3.svg'), alt: 'Image 3' },
        { src: require('../assets/slider_4.svg'), alt: 'Image 4' },
        { src: require('../assets/slider_5.svg'), alt: 'Image 5' },
      ],
    }
  },
  methods: {
    prevSlide() {
      if (this.activeIndex > 0) {
        this.activeIndex--
      }
    },
    nextSlide() {
      if (this.activeIndex < this.images.length - 1) {
        this.activeIndex++
      }
    },
    goToSlide(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style scoped>
</style>
