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

        <div v-if="loading" class="flex justify-center items-center h-32">
          <div class="loader"></div>
        </div>

        <!-- Основной контейнер для пользователей и фотографий -->
        <div v-else class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <!-- Секция с карточками пользователей -->
          <div class="overflow-y-auto max-h-[65vh]">
            <div class="grid grid-cols-1 gap-4">
              <div
                v-for="user in paginatedUsers"
                :key="user.id"
                class="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 class="text-lg font-semibold">{{ user.name }}</h3>
                <p class="text-sm"><strong>Email:</strong> {{ user.email }}</p>
                <p class="text-sm">
                  <strong>Телефон:</strong> {{ user.phone }}
                </p>
                <p class="text-sm">
                  <strong>Сайт:</strong>
                  <a
                    :href="'http://' + user.website"
                    class="text-blue-500 hover:underline"
                    >{{ user.website }}</a
                  >
                </p>
                <button
                  @click="handleUserPhotos(user.id, user.name)"
                  class="mt-2 bg-green-600 text-white py-1 px-3 rounded-md text-sm"
                >
                  Фотографии пользователя
                </button>
              </div>
            </div>

            <!-- Пагинация карточек пользователей -->
            <div class="flex justify-between mt-4">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
              >
                Назад
              </button>
              <span class="text-sm"
                >Страница {{ currentPage }} из {{ totalPages }}</span
              >
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
              >
                Вперед
              </button>
            </div>
          </div>

          <!-- Секция с фотографиями для десктопа -->
          <div
            v-if="isPhotoPopupOpen"
            class="overflow-y-auto max-h-[65vh] xl:block hidden"
          >
            <h3 class="text-lg font-bold mb-4">
              Фотографии пользователя: {{ currentUserName }}
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="photo in paginatedPhotos"
                :key="photo.id"
                class="flex flex-col items-center"
              >
                <img
                  :src="photo.thumbnailUrl"
                  :alt="photo.title"
                  class="w-24 h-24 object-cover rounded-md shadow-sm"
                />
                <p class="text-xs mt-1 text-center">{{ photo.title }}</p>
              </div>
            </div>

            <!-- Пагинация фотографий -->
            <div class="flex justify-between mt-4">
              <button
                @click="prevPhotoPage"
                :disabled="currentPhotoPage === 1"
                class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
              >
                Назад
              </button>
              <span class="text-sm"
                >Страница {{ currentPhotoPage }} из {{ totalPhotoPages }}</span
              >
              <button
                @click="nextPhotoPage"
                :disabled="currentPhotoPage === totalPhotoPages"
                class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
              >
                Вперед
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Попап для фотографий на мобильных устройствах -->
    <div
      v-if="isMobilePhotoPopupOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-md w-full h-auto">
        <!-- Кнопка закрытия попапа -->
        <button
          @click="closeMobilePhotoPopup"
          class="bg-red-500 text-white py-1 px-2 rounded-md text-sm float-right mb-4"
        >
          Закрыть
        </button>

        <h3 class="text-lg font-bold mb-4">
          Фотографии пользователя: {{ currentUserName }}
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="photo in paginatedPhotos"
            :key="photo.id"
            class="flex flex-col items-center"
          >
            <img
              :src="photo.thumbnailUrl"
              :alt="photo.title"
              class="w-24 h-24 object-cover rounded-md shadow-sm"
            />
            <p class="text-xs mt-1 text-center">{{ photo.title }}</p>
          </div>
        </div>

        <!-- Пагинация фотографий для мобильных устройств -->
        <div class="flex justify-between mt-4">
          <button
            @click="prevPhotoPage"
            :disabled="currentPhotoPage === 1"
            class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
          >
            Назад
          </button>
          <span class="text-sm"
            >Страница {{ currentPhotoPage }} из {{ totalPhotoPages }}</span
          >
          <button
            @click="nextPhotoPage"
            :disabled="currentPhotoPage === totalPhotoPages"
            class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md text-sm disabled:bg-gray-400"
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      const start = (this.currentPage - 1) * this.usersPerPage
      const end = start + this.usersPerPage
      return this.users.slice(start, end)
    },
    totalPhotoPages() {
      return Math.ceil(this.photos.length / this.photosPerPage)
    },
    paginatedPhotos() {
      const start = (this.currentPhotoPage - 1) * this.photosPerPage
      const end = start + this.photosPerPage
      return this.photos.slice(start, end)
    },
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true
      this.loading = true // Начинаем загрузку
      this.fetchUsers()
    },
    closePopup() {
      this.isPopupOpen = false
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
    async fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        this.users = data
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error)
      } finally {
        this.loading = false // Завершаем загрузку
      }
    },
    handleUserPhotos(userId, userName) {
      this.currentUserId = userId
      this.currentUserName = userName

      // Проверяем ширину экрана
      if (window.innerWidth < 768) {
        this.isMobilePhotoPopupOpen = true
        this.currentPhotoPage = 1 // Сбрасываем страницу при новом пользователе
        this.fetchUserPhotos()
      } else {
        this.isPhotoPopupOpen = true
        this.fetchUserPhotos()
      }
    },
    async fetchUserPhotos() {
      try {
        this.loading = true // Начинаем загрузку
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${this.currentUserId}`
        )
        const data = await response.json()
        this.photos = data
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error)
      } finally {
        this.loading = false // Завершаем загрузку
      }
    },
    closeMobilePhotoPopup() {
      this.isMobilePhotoPopupOpen = false
    },
  },
}
</script>

<style>
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
