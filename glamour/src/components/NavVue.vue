<script setup>
import { RouterLink } from 'vue-router'

const testUsers = [
  "Alisher", "John", "Doe", "Jane", "Doe", "Alijon",
  "Aziz", "Bemiyya", "Abu-bubu", "Donik", "Jonik", "Onur",]

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
                <a href="#">Login</a>
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
                    <input type="search">
                    <button>🔍</button>
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
