<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue';

let search = ref('')


const testUsers = [
  "Alisher", "John", "Doe", "Jane", "Doe", "Alijon",
    "Aziz", "Bemiyya", "Abu-bubu", "Donik", "Jonik", "Onur",]

const filteredNames = computed(() => {
    return testUsers.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
  <nav>
    <div class="top-nav">
      <div class="left">
        <a href="mailto:alisherxujanov163@gmail.com">
          alisherxujanov163@gmail.com
        </a>
        <a href="tel:+998334747477">
          +998 (33) 474-74-77
        </a>
      </div>
      <div class="right">
        <div class="nav-dropdown">
          English
        </div>
        <div class="nav-dropdown">
          USD
        </div>
        <RouterLink to="/login">Login</RouterLink>
        <a href="#">Wishlist</a>
        <a href="#">🛒</a>
      </div>
    </div>
    <div class="main-nav">
      <div class="left">
        <h2 id="logo">Glamour</h2>
        <div class="nav-links">
          <RouterLink to="/" active-class="active">Home</RouterLink>
          <RouterLink to="/about" active-class="active">About</RouterLink>
          <RouterLink to="/products" active-class="active">Products</RouterLink>
          <RouterLink to="/blog" active-class="active">Blog</RouterLink>
          <RouterLink to="/shop" active-class="active">Shop</RouterLink>
          <RouterLink to="/contact" active-class="active">Contact</RouterLink>
        </div>
      </div>
      <div class="right">
        <div class="searchbar">
          <input type="search" v-model="search" placeholder="Search for products">
          <button>🔍</button>
          <ul v-if="search.length > 0">
            <li v-for="name in filteredNames" :key="name">
              {{ name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
nav {
  .top-nav {
    padding: 10px 200px;
    background-color: $violet;
    color: $light;
    @include flex(row, space-between);

    .left {
      a {
        color: $light;
        margin-right: 50px;
      }
    }

    .right {
      @include flex(row, space-evenly);
    }
  }

  .main-nav {
    padding: 20px 200px;
    @include flex(row, space-between);

    .left {
      @include flex(row, space-between);

      #logo {
        margin-right: 200px;
        font-size: 2em;
      }

      a {
        margin-right: 20px;
        padding: 10px;

        &.active {
          color: $red;
        }
      }
    }
  }
}
</style>
