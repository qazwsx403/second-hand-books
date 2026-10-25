<template>
  <div class="spinner-wrap">
    <div class="spinner"></div>
    <p>加载中...</p>
  </div>
</template>

<style scoped>
.spinner-wrap { text-align: center; padding: 60px 0; color: #999; }
.spinner { width: 32px; height: 32px; margin: 0 auto 12px; border: 3px solid #eee; border-top-color: #2c3e50; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>