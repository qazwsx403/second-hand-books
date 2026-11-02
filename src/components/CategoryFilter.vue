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
.filter { display: flex; gap: 9px; flex-wrap: wrap; margin-top: 16px; }
button {
  min-height: 36px;
  padding: 7px 15px;
  color: #5e6d82;
  border: 1px solid rgba(64, 91, 130, 0.13);
  border-radius: 999px;
  background: rgba(247, 249, 253, 0.92);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
button:hover { color: #2e68cc; border-color: rgba(53, 120, 246, 0.28); background: #fff; transform: translateY(-1px); }
button.active { color: #fff; border-color: transparent; background: linear-gradient(135deg, #3478f6, #1aa999); box-shadow: 0 8px 18px rgba(45, 116, 225, 0.2); }
</style>
