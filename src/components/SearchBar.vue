<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true }
})
const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)
onMounted(() => {
  inputRef.value?.focus()
})

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <input
    ref="inputRef"
    class="search"
    type="text"
    :value="props.modelValue"
    placeholder="搜索书名..."
    @input="onInput"
  />
</template>

<style scoped>
.search { width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 24px; font-size: 15px; outline: none; }
.search:focus { border-color: #2c3e50; }
</style>