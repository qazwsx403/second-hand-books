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
.empty {
  min-height: 260px;
  padding: 54px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #8b97a8;
  text-align: center;
  border: 1px dashed rgba(58, 86, 126, 0.18);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.66);
}
.icon { width: 68px; height: 68px; margin: 0 0 14px; display: grid; place-items: center; border-radius: 20px; background: linear-gradient(145deg, #edf4ff, #eaf9f7); font-size: 34px; }
.text { margin: 0; font-size: 14px; }
</style>
