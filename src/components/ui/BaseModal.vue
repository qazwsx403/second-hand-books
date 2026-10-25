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
.mask { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center; z-index: 100; }
.modal { background: #fff; border-radius: 8px; width: 360px; max-width: 90vw; overflow: hidden; }
.header { padding: 16px; border-bottom: 1px solid #eee; }
.body { padding: 20px 16px; }
.footer { padding: 12px 16px; border-top: 1px solid #eee; text-align: right; }
</style>