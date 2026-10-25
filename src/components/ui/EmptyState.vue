<script setup>
defineProps({
  text: { type: String, default: '暂无数据' }
})
</script>

<template>
  <div class="empty">
    <p class="icon">📭</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.empty { text-align: center; padding: 60px 0; color: #999; }
.icon { font-size: 40px; margin: 0 0 8px; }
.text { font-size: 14px; margin: 0; }
</style>