<script setup>
import { useProduct } from '@/composables/useProduct';
import ProductGallery from './ProductGallery.vue';
import ProductInfo from './ProductInfo.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from './RelatedProducts.vue';
import { onMounted } from 'vue';
import { goToTopSmoothly } from '@/composables/helpers';

const { product, relatedProducts, isLoading, toggleLike, addToCart } = useProduct();

onMounted(() => {
  goToTopSmoothly();
});
</script>

<template>
  <div v-if="isLoading" class="loading">
    Loading product details...
  </div>
  <div v-else-if="product" class="product-details">
    <div class="main-content">
      <ProductGallery :image-url="product.pictureUrl" />
      <ProductInfo
        :product="product"
        :on-add-to-cart="addToCart"
        :on-toggle-like="toggleLike"
      />
    </div>
    <ProductTabs :description="product.description" />
    <RelatedProducts :products="relatedProducts" />
  </div>
  <div v-else class="error">
    Product not found
  </div>
</template>

<style lang="scss" scoped>
.loading, .error {
  text-align: center;
  padding: 50px;
  font-size: 20px;
}

.error {
  color: #dc3545;
}

.product-details {
  .main-content {
    width: 1120px;
    margin: 100px auto;
    padding: 10px;
    @include grid(2);
    box-shadow: 0 0 50px $violet-light;
  }
}
</style>
