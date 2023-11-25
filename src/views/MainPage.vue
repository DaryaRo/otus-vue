<template>
  <div v-if="isLoaded" class="products">
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

  <div v-else-if="isError" class="error-message">
    <div class="container">
      <h2>Что-то пошло не так :(</h2>
      <h3>Обновите страницу <br> или посетите сайт позже...</h3>
    </div>
  </div>

  <div v-else class="load-block">
    <div class="container">
      <load></load>
    </div>
  </div>
    
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Product from '@/components/Product.vue';
import Load from '@/components/Load.vue';


const products = ref(null);
const isLoaded = ref(false);
const isError = ref(false);

onMounted(getProducts);

function getProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
      products.value = json;
      isLoaded.value = true;
    })
    .catch(err => {
      isError.value = true;
    })
}


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

