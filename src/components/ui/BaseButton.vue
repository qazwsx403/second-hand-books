<script setup>
defineProps({
  type: { type: String, default: 'button' }
})
</script>

<template>
  <button :type="type" class="base-btn">
    <slot />
  </button>
</template>

<style scoped>
.base-btn { padding: 8px 20px; background: #2c3e50; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }
.base-btn:hover { background: #1a252f; }
</style>