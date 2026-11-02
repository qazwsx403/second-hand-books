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
  <div class="search-wrap">
    <span class="search-icon" aria-hidden="true"></span>
    <input
      ref="inputRef"
      class="search"
      type="text"
      :value="props.modelValue"
      placeholder="搜索书名..."
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.search-wrap { position: relative; }
.search-icon {
  position: absolute;
  top: 50%;
  left: 18px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  border: 2px solid #7c8ca5;
  border-radius: 50%;
  transform: translateY(-58%);
}
.search-icon::after {
  position: absolute;
  width: 7px;
  height: 2px;
  right: -6px;
  bottom: -3px;
  content: "";
  border-radius: 2px;
  background: #7c8ca5;
  transform: rotate(45deg);
}
.search {
  width: 100%;
  padding: 15px 18px 15px 48px;
  color: #1d2939;
  border: 1px solid rgba(69, 94, 133, 0.16);
  border-radius: 16px;
  outline: none;
  background: rgba(247, 249, 253, 0.9);
  font-size: 15px;
  box-shadow: inset 0 1px 2px rgba(18, 45, 84, 0.03);
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.search::placeholder { color: #9aa5b5; }
.search:hover { border-color: rgba(53, 120, 246, 0.28); background: #fff; }
.search:focus {
  border-color: #4b86f7;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(53, 120, 246, 0.11), 0 8px 20px rgba(45, 92, 165, 0.07);
}
</style>
