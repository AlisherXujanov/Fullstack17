<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons';
import { goToTopSmoothly } from '@/composables/helpers';

defineProps({
  products: {
    type: Array,
    required: true
  }
});

const handleProductClick = () => {
  goToTopSmoothly();
};
</script>

<template>
  <div class="related-products">
    <h1>Related Products</h1>
    <div class="products-grid">
      <div v-for="item in products" :key="item.id" class="product-card">
        <router-link :to="'/product-details/' + item.id" @click="handleProductClick">
          <img :src="item.pictureUrl" width="100%" alt="related-product">
        </router-link>
        <div class="card-content">
          <div class="card-header">
            <h1>{{ item.title }}</h1>
            <div class="stars">
              <AnFilledStar v-for="i in item.stars" :key="i" style="color: #ffc107;"/>
            </div>
          </div>
          <div class="price">
            <span>${{ (item.price * (1 - item.discount/100)).toFixed(2) }}</span>
            <span class="real-price">${{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.related-products {
  padding: 100px 95px;

  h1 {
    margin-bottom: 30px;
  }

  .products-grid {
    @include grid(4);
    gap: 30px;

    .product-card {
      color: $dark-blue;
      border: none;

      .card-content {
        padding: 15px 5px;

        .card-header {
          @include flex(row, space-between, _, 10px);
          margin-bottom: 0px;

          h1 {
            font-size: 14px;
          }

          .stars {
            font-size: 10px;
          }
        }

        .price {
          margin-top: 10px;
          font-size: 14px;

          span {
            margin-right: 10px;
          }

          .real-price {
            color: $red;
            text-decoration: line-through;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
