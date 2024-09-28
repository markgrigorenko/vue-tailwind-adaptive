<template>
  <div class="absolute bottom-0 left-0 w-full">
    <div
      class="md:h-[60px] h-[38px] overflow-hidden w-full bg-[#F54932] flex items-center"
    >
      <div class="marquee-container flex items-center">
        <div
          class="marquee-content text-white md:text-[22px] text-[16px] font-normal uppercase whitespace-nowrap"
        >
          <span v-for="(item, index) in messages" :key="index">
            {{ item }}  • 
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.marquee-container {
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
