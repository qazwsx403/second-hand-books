<template>
  <div class="spinner-wrap">
    <div class="spinner"></div>
    <p>加载中...</p>
  </div>
</template>

<style scoped>
.spinner-wrap { min-height: 260px; padding: 60px 0; display: flex; align-items: center; justify-content: center; flex-direction: column; color: #7e8b9e; text-align: center; }
.spinner-wrap p { margin: 0; font-size: 13px; letter-spacing: 0.04em; }
.spinner { width: 38px; height: 38px; margin: 0 auto 14px; border: 3px solid rgba(53, 120, 246, 0.12); border-top-color: #3578f6; border-right-color: #18ad9d; border-radius: 50%; box-shadow: 0 8px 18px rgba(53, 120, 246, 0.1); animation: spin 0.75s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
