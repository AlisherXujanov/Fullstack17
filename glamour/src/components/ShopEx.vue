<script setup>
import ChairImg from '@/assets/images/LatestProducts/img-1.png';

const offers = [
  { id: 1, icon: "🚚", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
  { id: 2, icon: "💳", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
  { id: 3, icon: "⏳", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
  { id: 4, icon: "🔧", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." }
];


</script>

<template>
  <section class="shopex-offer">
    <h2>What Shopex Offer!</h2>
    <div class="offer-grid">
      <div v-for="offer in offers" :key="offer.id" class="offer-card">
        <div class="icon">{{ offer.icon }}</div>
        <h3>{{ offer.title }}</h3>
        <p>{{ offer.description }}</p>
      </div>
    </div>
    <div class="feature-product">
      <div class="product-image">
        <img :src="ChairImg" alt="B&B Italian Sofa" width="300px" height="300px">
      </div>
      <div class="product-info">
        <h2>Unique Features Of Latest & Trending Products</h2>
        <ul>
          <li>All frames constructed with hardwood solids and laminates</li>
          <li>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
          <li>Arms, backs, and seats are structurally reinforced</li>
        </ul>
        <button class="add-to-cart">Add To Cart</button>
        <span class="price">B&B Italian Sofa - $32.00</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.shopex-offer {
  text-align: center;
  padding: 40px;

  .offer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px auto 0;
    width: 80%;
  }

  .offer-card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    .icon {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }

  .feature-product {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    padding: 40px;
    border-radius: 10px;
    margin-top: 40px;

    .product-image {
      img {
        width: 300px;
        border-radius: 10px;
      }
    }

    .product-info {
      max-width: 400px;
      margin-left: 20px;
      text-align: left;

      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
        font-size: 16px;
      }

      .add-to-cart {
        background: #ff4081;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
      }

      .price {
        display: block;
        margin-top: 10px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
}
</style>
