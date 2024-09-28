<template>
  <div class="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
    <h3 class="text-lg font-semibold">{{ user.name }}</h3>
    <p class="text-sm"><strong>Email:</strong> {{ user.email }}</p>
    <p class="text-sm">
      <strong>Телефон:</strong> {{ user.phone }}
    </p>
    <p class="text-sm">
      <strong>Сайт:</strong>
      <a :href="'http://' + user.website" class="text-blue-500 hover:underline">
        {{ user.website }}
      </a>
    </p>
    <button
        @click="$emit('show-photos', user.id, user.name)"
        class="mt-2 bg-green-600 text-white py-1 px-3 rounded-md text-sm"
    >
      Фотографии пользователя
    </button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
