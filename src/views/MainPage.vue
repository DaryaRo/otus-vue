<template>

  <div v-if="isLoading" class="load-block">
    <div class="container">
      <load></load>
    </div>
  </div>

  <div v-else class="products">
    <div class="container">
      <div class="products__wrapper">
        <product 
          v-for="product in products" 
          :key="product.id"
          :product="product"
        ></product>
      </div>
    </div>
  </div>

  <div v-if="isError" class="error-message">
    <div class="container">
      <h2>Что-то пошло не так :(</h2>
      <h3>Обновите страницу <br> или посетите сайт позже...</h3>
    </div>
  </div>

  
    
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Product from '@/components/Product.vue';
import Load from '@/components/Load.vue';
import { getProducts } from '@/services/productServices';


const products = ref(null);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
  products.value = await getProducts();
  isLoading.value = false;

  if (!products.value) {
    isError.value = true;
  }

});

</script>

<style lang="scss">
  .error-message,
  .load-block {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h2 {
      margin-bottom: 24px;
    }
  }

  .products {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;

      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (min-width: 1170px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }
</style>

