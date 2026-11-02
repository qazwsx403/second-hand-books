<script setup>
defineProps({
  book: { type: Object, required: true }
})
</script>

<template>
  <RouterLink :to="`/book/${book.id}`" class="card">
    <div class="cover-wrap">
      <img :src="book.cover" :alt="book.title" class="cover" />
    </div>
    <div class="info">
      <span class="category">校园精选</span>
      <h3 class="title">{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <div class="card-bottom">
        <p class="price">￥{{ book.price }}</p>
        <span class="detail-link">查看详情 <b>→</b></span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  position: relative;
  min-height: 190px;
  padding: 18px;
  display: flex;
  gap: 18px;
  overflow: hidden;
  color: inherit;
  border: 1px solid rgba(54, 82, 124, 0.1);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 12px 34px rgba(31, 66, 114, 0.08);
  text-decoration: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.card::after {
  position: absolute;
  width: 120px;
  height: 120px;
  right: -70px;
  top: -70px;
  content: "";
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(53, 120, 246, 0.12), rgba(22, 184, 166, 0.12));
  transition: transform 0.3s ease;
}
.card:hover { border-color: rgba(53, 120, 246, 0.22); box-shadow: 0 22px 48px rgba(31, 75, 139, 0.14); transform: translateY(-5px); }
.card:hover::after { transform: scale(1.25); }
.cover-wrap {
  width: 112px;
  height: 150px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 14px;
  background: #e8edf5;
  box-shadow: 0 12px 24px rgba(25, 47, 78, 0.17);
}
.cover { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform 0.35s ease; }
.card:hover .cover { transform: scale(1.045); }
.info { min-width: 0; flex: 1; display: flex; flex-direction: column; }
.category {
  width: fit-content;
  margin-bottom: 10px;
  padding: 4px 8px;
  color: #3171dc;
  border-radius: 7px;
  background: #edf4ff;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.08em;
}
.title { margin: 0 0 7px; overflow: hidden; font-size: 17px; line-height: 1.4; text-overflow: ellipsis; white-space: nowrap; }
.author { margin: 0 0 14px; overflow: hidden; color: #7b8798; font-size: 13px; text-overflow: ellipsis; white-space: nowrap; }
.card-bottom { margin-top: auto; display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }
.price { margin: 0; color: #ee5a62; font-size: 21px; font-weight: 800; letter-spacing: -0.03em; }
.detail-link { color: #55708f; font-size: 12px; font-weight: 650; white-space: nowrap; }
.detail-link b { color: #3578f6; font-size: 15px; }

@media (max-width: 420px) {
  .card { min-height: 174px; padding: 15px; gap: 14px; }
  .cover-wrap { width: 96px; height: 136px; }
  .detail-link { display: none; }
}
</style>
