<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg max-w-3xl w-full h-auto">
      <h3 class="text-lg font-semibold mb-4">
        Фотографии пользователя {{ currentUserName }}
      </h3>

      <button
        @click="$emit('close')"
        class="bg-red-500 text-white py-1 px-2 rounded-md text-sm float-right mb-4"
      >
        Закрыть
      </button>

      <div class="grid grid-cols-2 gap-2">
        <div
          v-for="photo in paginatedPhotos"
          :key="photo.id"
          class="border rounded-md overflow-hidden"
        >
          <img :src="photo.url" :alt="photo.title" class="w-full h-auto" />
        </div>
      </div>

      <Pagination
        :current-page="currentPhotoPage"
        :total-pages="totalPhotoPages"
        @prev-page="prevPage"
        @next-page="nextPage"
      />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  components: { Pagination },
  props: {
    currentUserName: {
      type: String,
      required: true,
    },
    paginatedPhotos: {
      type: Array,
      required: true,
    },
    currentPhotoPage: {
      type: Number,
      required: true,
    },
    totalPhotoPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    prevPage() {
      this.$emit('prev-page')
    },
    nextPage() {
      this.$emit('next-page')
    },
  },
}
</script>
