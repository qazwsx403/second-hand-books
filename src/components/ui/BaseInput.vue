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
.field { display: flex; flex-direction: column; gap: 8px; }
.label { color: #344054; font-size: 13px; font-weight: 650; }
input {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  color: #1d2939;
  border: 1px solid rgba(66, 91, 129, 0.16);
  border-radius: 13px;
  outline: none;
  background: #f8fafd;
  font-size: 14px;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
input::placeholder { color: #a0aaba; }
input:hover { border-color: rgba(53, 120, 246, 0.28); background: #fff; }
input:focus { border-color: #4b86f7; background: #fff; box-shadow: 0 0 0 4px rgba(53, 120, 246, 0.1); }
</style>
