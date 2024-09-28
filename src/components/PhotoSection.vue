<template>
  <div class="overflow-y-auto max-h-[65vh]">
    <h3 class="text-lg font-semibold mb-4">
      Фотографии пользователя {{ currentUserName }}
    </h3>

    <div class="grid grid-cols-3 gap-2">
      <div
        v-for="photo in paginatedPhotos"
        :key="photo.id"
        class="border rounded-md overflow-hidden w-[100px] h-[100px]"
      >
        <img :src="photo.url" :alt="photo.title" class="w-auto h-[100px]" />
      </div>
    </div>

    <Pagination
      :current-page="currentPhotoPage"
      :total-pages="totalPhotoPages"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
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
