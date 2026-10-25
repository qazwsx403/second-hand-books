<script setup>
const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <label class="field">
    <span v-if="props.label" class="label">{{ props.label }}</span>
    <input
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="onInput"
    />
  </label>
</template>

<style scoped>
.field { display: flex; flex-direction: column; gap: 6px; }
.label { font-size: 14px; color: #444; }
input { padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; outline: none; }
input:focus { border-color: #2c3e50; }
</style>