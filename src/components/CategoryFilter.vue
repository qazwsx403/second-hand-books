<script setup>
const props = defineProps({
  modelValue: { type: String, required: true },
  categories: { type: Array, required: true }
})
const emit = defineEmits(['update:modelValue'])

function select(category) {
  emit('update:modelValue', category)
}
</script>

<template>
  <div class="filter">
    <button
      v-for="cat in props.categories"
      :key="cat"
      :class="{ active: cat === props.modelValue }"
      @click="select(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.filter { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
button { padding: 6px 14px; border: 1px solid #ddd; background: #fff; border-radius: 16px; cursor: pointer; font-size: 14px; }
button.active { background: #2c3e50; color: #fff; border-color: #2c3e50; }
</style>