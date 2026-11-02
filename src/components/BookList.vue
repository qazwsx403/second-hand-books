<script setup>
import BookCard from './BookCard.vue'
defineProps({
  books: { type: Array, required: true }
})
</script>

<template>
  <div class="list">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<style scoped>
.list { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 330px), 1fr)); gap: 20px; }
</style>
