<script setup>
const props = defineProps({
  favorited: { type: Boolean, required: true }
})
const emit = defineEmits(['toggle-favorite'])

function handleClick() {
  emit('toggle-favorite')
}
</script>

<template>
  <button class="fav-btn" :class="{ active: props.favorited }" @click="handleClick">
    {{ props.favorited ? '★ 已收藏' : '☆ 收藏' }}
  </button>
</template>

<style scoped>
.fav-btn { padding: 8px 20px; border: 1px solid #e4393c; background: #fff; color: #e4393c; border-radius: 20px; cursor: pointer; font-size: 14px; }
.fav-btn.active { background: #e4393c; color: #fff; }
</style>