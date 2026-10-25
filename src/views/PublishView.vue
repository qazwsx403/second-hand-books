<script setup>
import { ref } from 'vue'
import BaseInput from '../components/ui/BaseInput.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseModal from '../components/ui/BaseModal.vue'

const form = ref({
  title: '',
  author: '',
  price: ''
})
const errorMsg = ref('')
const showModal = ref(false)

function handleSubmit() {
  if (!form.value.title || !form.value.author || !form.value.price) {
    errorMsg.value = '请填写完整信息'
    return
  }
  if (Number(form.value.price) <= 0) {
    errorMsg.value = '价格必须大于 0'
    return
  }
  errorMsg.value = ''
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  form.value = { title: '', author: '', price: '' }
}
</script>

<template>
  <div class="publish-page">
    <h2>发布二手书</h2>
    <form class="form" @submit.prevent="handleSubmit">
      <BaseInput v-model="form.title" label="书名" placeholder="请输入书名" />
      <BaseInput v-model="form.author" label="作者" placeholder="请输入作者" />
      <BaseInput v-model="form.price" label="价格" type="number" placeholder="请输入价格" />
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      <BaseButton type="submit">提交发布</BaseButton>
    </form>

    <BaseModal :visible="showModal" @close="closeModal">
      <template #header>
        <h3>发布成功</h3>
      </template>
      <p>你的书籍《{{ form.title }}》已提交（前端模拟）。</p>
      <template #footer>
        <BaseButton @click="closeModal">知道了</BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped>
.publish-page { max-width: 480px; }
.form { display: flex; flex-direction: column; gap: 16px; margin-top: 16px; }
.error { color: #e4393c; font-size: 14px; }
</style>