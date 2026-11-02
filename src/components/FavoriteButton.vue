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
.fav-btn {
  min-height: 44px;
  padding: 10px 20px;
  color: #ef5964;
  border: 1px solid rgba(239, 89, 100, 0.32);
  border-radius: 999px;
  background: #fff7f8;
  box-shadow: 0 8px 18px rgba(199, 65, 75, 0.08);
  cursor: pointer;
  font-size: 14px;
  font-weight: 650;
  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.fav-btn:hover { box-shadow: 0 12px 24px rgba(199, 65, 75, 0.15); transform: translateY(-2px); }
.fav-btn.active { color: #fff; border-color: transparent; background: linear-gradient(135deg, #f26570, #e94857); box-shadow: 0 10px 24px rgba(228, 66, 79, 0.23); }
</style>
