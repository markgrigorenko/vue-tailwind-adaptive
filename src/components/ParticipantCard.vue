<template>
  <div class="flex justify-center items-center flex-col w-[394px] h-[475px]">
    <!-- Аватар -->
    <img
      src="@/assets/avatar.png"
      alt="Avatar"
      class="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover"
    />
    <!-- Имя -->
    <div class="mt-7 text-2xl font-semibold text-center font-golos leading-7">
      {{ name }}
    </div>

    <!-- Описание -->
    <div class="mt-1.5 text-lg opacity-60 text-center font-golos">
      {{ description }}
    </div>
    <!-- Кнопка -->
    <div class="mt-5">
      <a
        :href="link"
        class="block px-5 py-2 text-center text-[#3057A2] font-golos border border-[#3057A2] rounded-full transition hover:bg-[#3057A2] hover:text-white"
      >
        Подробнее
      </a>
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
