<template>
  <header class="header">
    <div class="container">
      <h1>
        <logo-svg />
        <span>Vite-Shop</span>
      </h1>
    </div>
  </header>

  <main>
    <main-page></main-page>
  </main>

  <footer class="footer">
    <div class="container">
      <h1>Footer</h1>
    </div>
  </footer>
</template>

<script setup>
  import MainPage from '@/views/MainPage.vue';
  import logoSvg from '@/assets/icons/logo.svg';

</script>

<style lang="scss">
  .header {
    padding: 15px 0;
    background: black;
    color: white;
    border-radius: 0 0 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;

    h1 {
      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;
      }
    }
  }

  .footer {
    padding: 15px 0;
    background: black;
    color: white;
    border-radius: 16px 16px 0 0;
  }
</style>
