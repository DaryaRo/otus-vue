<template>
  <div class="load">
    <div class="load__icon"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .load {
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      width: 50px;
      height: 50px;
      border: 5px dashed green;
      border-radius: 50%;
      animation: spin 2s infinite;
    }
  }

  @keyframes spin {
    from { transform: rotate(0) }
    to { transform: rotate(360deg) }
  }
</style>