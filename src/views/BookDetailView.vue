<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchBookById } from '../data/books'
import FavoriteButton from '../components/FavoriteButton.vue'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import BaseButton from '../components/ui/BaseButton.vue'

const route = useRoute()
const router = useRouter()

const book = ref(null)
const loading = ref(true)
const isFavorited = ref(false)

watch(
  () => route.params.id,
  async (newId) => {
    if (!newId) return
    loading.value = true
    book.value = await fetchBookById(newId)
    loading.value = false
    isFavorited.value = false
  },
  { immediate: true }
)

function handleToggleFavorite() {
  isFavorited.value = !isFavorited.value
}
</script>

<template>
  <div class="detail-page">
    <BaseButton @click="router.back()">← 返回</BaseButton>

    <LoadingSpinner v-if="loading" />
    <EmptyState v-else-if="!book" text="没有找到这本书" />
    <div v-else class="detail-card">
      <img :src="book.cover" :alt="book.title" class="cover" />
      <div class="info">
        <h2>{{ book.title }}</h2>
        <p class="meta">作者：{{ book.author }}</p>
        <p class="meta">分类：{{ book.category }}</p>
        <p class="price">￥{{ book.price }}</p>
        <p class="desc">{{ book.description }}</p>
        <FavoriteButton :favorited="isFavorited" @toggle-favorite="handleToggleFavorite" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page { display: flex; flex-direction: column; gap: 16px; }
.detail-card { display: flex; gap: 24px; background: #fff; border-radius: 8px; padding: 24px; }
.cover { width: 200px; height: 266px; object-fit: cover; border-radius: 6px; }
.info { flex: 1; }
.info h2 { margin: 0 0 12px; }
.meta { color: #666; margin: 4px 0; }
.price { color: #e4393c; font-size: 22px; font-weight: bold; margin: 12px 0; }
.desc { color: #444; line-height: 1.6; }
</style>