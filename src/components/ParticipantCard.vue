<template>
  <div class="flex justify-center items-center flex-col w-[394px] h-[462px]">
    <img
      src="@/assets/avatar.png"
      alt="Avatar"
      class="md:w-[320px] md:h-[320px] w-[244px] h-[244px] left-[37px] rounded-[195.56px]"
    />
    <div
      class="w-[286px] h-[29px] font-golos text-[24px] font-semibold leading-[28.8px] mt-[28px] text-center"
    >
      {{ name }}
    </div>
    <div
      class="mt-[6px] h-[24px] opacity-[0.6] font-golos text-[20px] font-normal leading-[24px] text-left"
    >
      {{ description }}
    </div>
    <div
      class="w-[113px] mt-[20px] h-[35px] p-[12px] flex justify-center items-center flex-col gap-[10px] font-golos rounded-[62px] border-[#3057A2] border-[1px]"
    >
      <a :href="link" class="text-center text-[#3057A2]">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
