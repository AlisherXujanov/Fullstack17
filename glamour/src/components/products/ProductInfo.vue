<script setup>
import { AnFilledStar, BxHeart, BxSolidHeart, LuShoppingCart } from '@kalimahapps/vue-icons';
import facebook from '@/assets/images/productDetails/facebook.png';
import twitter from '@/assets/images/productDetails/twitter2.png';
import instagram from '@/assets/images/productDetails/instagram3.png';

defineProps({
  product: {
    type: Object,
    required: true
  },
  onAddToCart: {
    type: Function,
    required: true
  },
  onToggleLike: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <div class="product-info">
    <h1>{{ product.title }}</h1>
    <div class="stars">
      <AnFilledStar v-for="i in product.stars" :key="i" style="color: #ffc107;"/>
      <AnFilledStar v-for="i in 5 - product.stars" :key="i + product.stars" style="color: #ced4da;"/>
      <span>({{ Math.floor(Math.random() * 50) }})</span>
    </div>
    <div class="price">
      <span class="current-price">${{ (product.price * (1 - product.discount/100)).toFixed(2) }}</span>
      <span class="real-price">${{ product.price }}</span>
    </div>
    <p class="color">Color</p>
    <div class="colors">
      <span v-for="c in product.colors" :key="c" :class="c"></span>
    </div>
    <p class="description">{{ product.description }}</p>
    <div class="add-to-cart-wrapper">
      <button class="add-to-cart" @click="onAddToCart(product.id)">
        <LuShoppingCart /> Add To Cart
      </button>
      <span class="toggle-like" @click="onToggleLike(product.id)">
        <BxHeart v-if="!product.liked" />
        <BxSolidHeart class="liked" v-else />
      </span>
    </div>
    <div class="product-meta">
      <p>Categories: {{ product.category || 'Fashion' }}</p>
      <p>Tags: {{ product.tags || 'Modern, Design' }}</p>
      <p>Share
        <img :src="facebook" alt="Facebook">
        <img :src="instagram" alt="Instagram">
        <img :src="twitter" alt="Twitter">
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  @include flex(column, center, start, 10px);
  padding-left: 40px;

  h1 {
    color: $dark-blue;
  }

  .stars {
    margin-bottom: 10px;
  }

  .price {
    margin-bottom: 10px;

    .current-price {
      margin-right: 10px;
    }

    .real-price {
      color: $red;
      text-decoration: line-through;
    }
  }

  .color {
    margin: 0;
  }

  .colors {
    margin: 10px 0;
    span {
      margin-right: 5px;
      @include circle(15px);
      display: inline-block;

      &.red { background-color: $magenta; }
      &.blue { background-color: $violet-blue; }
      &.orange { background-color: $orange; }
    }
  }

  .description {
    color: $text-color-transparent;
    margin: 0;
  }

  .add-to-cart-wrapper {
    margin: 20px 0;
    @include flex(row, start, center, 15px);

    .add-to-cart {
      background-color: $dark-blue;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      @include flex(row, center, center, 10px);

      &:hover {
        background-color: darken($dark-blue, 10%);
      }
    }

    .toggle-like {
      display: inline-block;
      padding: 8px;
      border-radius: 50%;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
        color: $dark-blue;
      }

      svg.liked {
        fill: $red;
      }
    }
  }

  .product-meta {
    margin: 15px 0;

    p {
      margin: 5px 0;
    }

    img {
      width: 20px;
      height: 20px;
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
