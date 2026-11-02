<script setup>
defineProps({
  visible: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="mask" @click.self="emit('close')">
      <div class="modal">
        <div class="header">
          <slot name="header" />
        </div>
        <div class="body">
          <slot />
        </div>
        <div class="footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  z-index: 100;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 24, 47, 0.56);
  backdrop-filter: blur(8px);
}
.modal {
  width: 410px;
  max-width: 100%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 30px 80px rgba(8, 26, 53, 0.3);
  animation: modal-in 0.22s ease-out;
}
.header { padding: 22px 24px 16px; border-bottom: 1px solid rgba(49, 76, 115, 0.08); }
.header :deep(h3) { margin: 0; font-size: 21px; }
.body { padding: 22px 24px; color: #58677b; line-height: 1.7; }
.body :deep(p) { margin: 0; }
.footer { padding: 15px 24px 22px; text-align: right; }
@keyframes modal-in { from { opacity: 0; transform: translateY(12px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
</style>
