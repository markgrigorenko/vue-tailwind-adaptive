<template>
  <div class="font-golos">
    <!-- Кнопка для открытия попапа -->
    <div>
      <button
          class="mx-[100px] mt-[50px] font-golos uppercase text-2xl font-normal leading-[23.4px] text-left hover:text-[#B67C32] cursor-pointer"
          @click="openPopup"
      >
        Открыть список претендентов
      </button>
    </div>

    <!-- Попап -->
    <div
        v-if="isPopupOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
          class="bg-white p-6 rounded-lg max-w-3xl w-full h-auto"
          :style="{ maxHeight: '75vh' }"
      >
        <!-- Заголовок попапа -->
        <h2 class="text-xl font-bold mb-4">Список претендентов</h2>

        <!-- Кнопка закрытия попапа -->
        <button
            @click="closePopup"
            class="bg-red-500 text-white py-1 px-2 rounded-md text-sm float-right mb-4"
        >
          Закрыть
        </button>

        <Loader v-if="loading" />

        <!-- Основной контейнер для пользователей и фотографий -->
        <div v-else class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <!-- Секция с карточками пользователей -->
          <div class="overflow-y-auto max-h-[65vh]">
            <UserCard
                v-for="user in paginatedUsers"
                :key="user.id"
                :user="user"
                @show-photos="handleUserPhotos"
            />

            <!-- Пагинация карточек пользователей -->
            <Pagination
                :current-page="currentPage"
                :total-pages="totalPages"
                @prev-page="prevPage"
                @next-page="nextPage" > </Pagination>
          </div>

          <!-- Секция с фотографиями для десктопа -->
          <PhotoSection
              v-if="isPhotoPopupOpen"
              :current-user-name="currentUserName"
              :paginated-photos="paginatedPhotos"
              :current-photo-page="currentPhotoPage"
              :total-photo-pages="totalPhotoPages"
              @prev-page="prevPhotoPage"
              @next-page="nextPhotoPage"
          />
        </div>
      </div>
    </div>

    <!-- Попап для фотографий на мобильных устройствах -->
    <MobilePhotoPopup
        v-if="isMobilePhotoPopupOpen"
        :current-user-name="currentUserName"
        :paginated-photos="paginatedPhotos"
        :current-photo-page="currentPhotoPage"
        :total-photo-pages="totalPhotoPages"
        @close="closeMobilePhotoPopup"
        @prev-page="prevPhotoPage"
        @next-page="nextPhotoPage"
    />
  </div>
</template>

<script>
import { fetchUsers, fetchUserPhotos } from '@/api/api'
import Loader from '@/components/Loader.vue'
import UserCard from '@/components/UserCard.vue'
import Pagination from '@/components/Pagination.vue'
import PhotoSection from '@/components/PhotoSection.vue'
import MobilePhotoPopup from '@/components/MobilePhotoPopup.vue'

export default {
  components: {MobilePhotoPopup, Loader, UserCard, PhotoSection, Pagination},
  data() {
    return {
      users: [],
      photos: [],
      currentPage: 1,
      usersPerPage: 6,
      isPopupOpen: false,
      isPhotoPopupOpen: false,
      isMobilePhotoPopupOpen: false,
      currentUserId: null,
      currentUserName: '',
      currentPhotoPage: 1,
      photosPerPage: 6,
      loading: false, // Лоадер
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.usersPerPage)
    },
    paginatedUsers() {
      return this.paginate(this.users, this.currentPage, this.usersPerPage)
    },
    totalPhotoPages() {
      return Math.ceil(this.photos.length / this.photosPerPage)
    },
    paginatedPhotos() {
      return this.paginate(this.photos, this.currentPhotoPage, this.photosPerPage)
    },
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true
      this.loading = true
      this.loadUsers()
    },
    closePopup() {
      this.isPopupOpen = false
      this.resetPopups()
    },
    resetPopups() {
      this.isPhotoPopupOpen = false
      this.isMobilePhotoPopupOpen = false
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPhotoPage() {
      if (this.currentPhotoPage > 1) {
        this.currentPhotoPage--
      }
    },
    nextPhotoPage() {
      if (this.currentPhotoPage < this.totalPhotoPages) {
        this.currentPhotoPage++
      }
    },
    async loadUsers() {
      try {
        this.users = await fetchUsers()
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error)
      } finally {
        this.loading = false
      }
    },
    handleUserPhotos(userId, userName) {
      this.currentUserId = userId
      this.currentUserName = userName

      if (window.innerWidth < 768) {
        this.isMobilePhotoPopupOpen = true
        this.currentPhotoPage = 1
        this.loadUserPhotos()
      } else {
        this.isPhotoPopupOpen = true
        this.loadUserPhotos()
      }
    },
    async loadUserPhotos() {
      try {
        this.loading = true
        this.photos = await fetchUserPhotos(this.currentUserId)
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error)
      } finally {
        this.loading = false
      }
    },
    closeMobilePhotoPopup() {
      this.isMobilePhotoPopupOpen = false
    },
    paginate(array, page, perPage) {
      const start = (page - 1) * perPage
      const end = start + perPage
      return array.slice(start, end)
    },
  },
}
</script>

<style scoped>
/* Стили для лоадера */
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
