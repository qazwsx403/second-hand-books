<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="inner">
      <span class="logo">📚 校园二手书</span>
      <nav class="nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/publish">发布书籍</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header { background: #2c3e50; color: #fff; }
.inner { max-width: 960px; margin: 0 auto; padding: 0 16px; height: 56px; display: flex; align-items: center; justify-content: space-between; }
.logo { font-weight: bold; }
.nav { display: flex; gap: 20px; }
.nav a { color: #cfd8e3; text-decoration: none; }
.nav a.router-link-active { color: #fff; font-weight: bold; }
</style>