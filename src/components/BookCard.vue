<script setup>
defineProps({
  book: { type: Object, required: true }
})
</script>

<template>
  <RouterLink :to="`/book/${book.id}`" class="card">
    <img :src="book.cover" :alt="book.title" class="cover" />
    <div class="info">
      <h3 class="title">{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="price">￥{{ book.price }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card { display: flex; gap: 12px; background: #fff; border-radius: 8px; padding: 12px; text-decoration: none; color: inherit; transition: box-shadow 0.2s; }
.card:hover { box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); }
.cover { width: 80px; height: 106px; object-fit: cover; border-radius: 4px; }
.title { margin: 0 0 6px; font-size: 16px; }
.author { color: #888; font-size: 13px; margin: 0 0 6px; }
.price { color: #e4393c; font-weight: bold; }
</style>