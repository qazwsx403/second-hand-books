<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchBooks, categories } from '../data/books'
import BookList from '../components/BookList.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import SearchBar from '../components/SearchBar.vue'
import EmptyState from '../components/ui/EmptyState.vue'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'

const books = ref([])
const loading = ref(true)
const keyword = ref('')
const activeCategory = ref('全部')

onMounted(async () => {
  loading.value = true
  books.value = await fetchBooks()
  loading.value = false
})

const filteredBooks = computed(() => {
  
  const kw = keyword.value.trim().toLowerCase()
  
  return books.value.filter((book) => {
    
    const matchCategory =
      activeCategory.value === '全部' || book.category === activeCategory.value
      
   
    const matchKeyword =
      kw === '' ||
      book.title.toLowerCase().includes(kw) ||
      book.author.toLowerCase().includes(kw)

    return matchCategory && matchKeyword
  })
})
</script>

<template>
  <div>
    <SearchBar v-model="keyword" />
    <CategoryFilter v-model="activeCategory" :categories="categories" />

    <LoadingSpinner v-if="loading" />
    <template v-else>
      <EmptyState v-if="filteredBooks.length === 0" text="没有找到符合条件的书籍" />
      <BookList v-else :books="filteredBooks" />
    </template>
  </div>
</template>