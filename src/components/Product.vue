<template>
  <div  class="product">
    <div class="product__image">
      <img :src="product.image" alt="">
    </div>
    
    <div class="product__body">
      <p class="product__title">
        {{ product.title }}
      </p>

      <div class="product__footer">
        <p class="product__price">
          {{ product.price }} $
        </p>
        <button>
          <cart-svg />
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import cartSvg from '@/assets/icons/cart.svg';

  const props = defineProps(['product']);

</script>

<style lang="scss">
  .product {
    overflow: hidden;
    border-radius: 16px;
    background: white;
    padding: 0 10px 5px;
    box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.10);

    &__image {
      width: 100%;
      height: 250px;
      background: #ffffff;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      height: 42px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__price {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 8px;
    }

    &__footer {
      margin-top: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>