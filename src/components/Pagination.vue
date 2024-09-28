<template>
  <div class="flex justify-between mt-4">
    <button
      @click="$emit('prev-page')"
      :disabled="currentPage === 1"
      class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
    >
      Назад
    </button>
    <span class="text-sm">
      Страница {{ currentPage }} из {{ totalPages }}
    </span>
    <button
      @click="$emit('next-page')"
      :disabled="currentPage === totalPages"
      class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
    >
      Вперед
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
}
</script>
