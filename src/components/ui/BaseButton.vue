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
.base-btn {
  min-height: 42px;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 12px;
  background: linear-gradient(135deg, #3478f6, #2365df);
  box-shadow: 0 10px 22px rgba(48, 111, 226, 0.22);
  cursor: pointer;
  font-size: 14px;
  font-weight: 650;
  transition: box-shadow 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.base-btn:hover { box-shadow: 0 14px 28px rgba(48, 111, 226, 0.28); filter: brightness(1.04); transform: translateY(-2px); }
.base-btn:active { box-shadow: 0 6px 14px rgba(48, 111, 226, 0.2); transform: translateY(0); }
</style>
