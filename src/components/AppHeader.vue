<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="inner">
      <span class="logo">
        <span class="logo-icon">📚</span>
        <span class="brand-copy">
          <strong>校园二手书</strong>
          <small>Campus Book Market</small>
        </span>
      </span>
      <nav class="nav">
        <RouterLink to="/">
          <span class="nav-icon" aria-hidden="true">⌂</span>
          <span>首页</span>
        </RouterLink>
        <RouterLink to="/publish">
          <span class="nav-icon publish-icon" aria-hidden="true">＋</span>
          <span>发布书籍</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 12px 0;
  color: #fff;
  background: linear-gradient(to bottom, rgba(244, 247, 251, 0.92), rgba(244, 247, 251, 0.7));
  backdrop-filter: blur(20px);
}

.inner {
  position: relative;
  width: min(1180px, calc(100% - 40px));
  min-height: 70px;
  margin: 0 auto;
  padding: 10px 12px 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 22px;
  background:
    radial-gradient(circle at 72% -80%, rgba(100, 224, 204, 0.36), transparent 20rem),
    linear-gradient(120deg, rgba(20, 55, 108, 0.98), rgba(35, 94, 178, 0.96) 58%, rgba(23, 151, 143, 0.94));
  box-shadow: 0 16px 42px rgba(24, 61, 116, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.inner::before {
  position: absolute;
  width: 180px;
  height: 180px;
  right: 18%;
  top: -150px;
  content: "";
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
}

.logo {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
}

.logo-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.1));
  box-shadow: 0 9px 22px rgba(8, 37, 82, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  font-size: 22px;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-copy strong {
  color: #fff;
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -0.025em;
}

.brand-copy small {
  color: rgba(225, 237, 255, 0.62);
  font-size: 9px;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.nav {
  position: relative;
  z-index: 1;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(7, 30, 69, 0.2);
  box-shadow: inset 0 1px 2px rgba(3, 24, 57, 0.16);
  backdrop-filter: blur(12px);
}

.nav a {
  min-height: 42px;
  padding: 9px 15px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(235, 243, 255, 0.76);
  border: 1px solid transparent;
  border-radius: 12px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 650;
  transition: color 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}

.nav-icon {
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  color: rgba(227, 238, 255, 0.82);
  border-radius: 7px;
  font-size: 17px;
  line-height: 1;
  transition: color 0.22s ease, background 0.22s ease;
}

.publish-icon {
  font-size: 19px;
  font-weight: 400;
}

.nav a:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav a:hover .nav-icon {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.nav a.router-link-active {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.26);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.23), rgba(255, 255, 255, 0.13));
  box-shadow: 0 7px 18px rgba(5, 33, 76, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.nav a.router-link-active .nav-icon {
  color: #fff;
  background: linear-gradient(135deg, #5390ff, #23b6a6);
  box-shadow: 0 5px 12px rgba(12, 67, 135, 0.22);
}

@media (max-width: 640px) {
  .header { padding: 8px 0; }
  .inner { width: min(100% - 20px, 1180px); min-height: 62px; padding: 8px 9px 8px 11px; gap: 10px; border-radius: 18px; }
  .logo { gap: 8px; }
  .logo-icon { width: 40px; height: 40px; border-radius: 12px; font-size: 19px; }
  .brand-copy strong { font-size: 14px; }
  .brand-copy small { display: none; }
  .nav { padding: 4px; border-radius: 13px; }
  .nav a { min-height: 36px; padding: 7px 9px; gap: 4px; border-radius: 9px; font-size: 12px; }
  .nav-icon { width: 18px; height: 18px; font-size: 15px; }
}

@media (max-width: 410px) {
  .brand-copy strong { max-width: 72px; overflow: hidden; text-overflow: ellipsis; }
  .nav a { padding-inline: 8px; }
  .nav-icon { display: none; }
}
</style>
