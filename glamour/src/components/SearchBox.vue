<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { AkSearch } from '@kalimahapps/vue-icons';

const store = useStore()
const searchResults = ref([])
const isSearchOpen = ref(false)
const searchQuery = ref('')

const handleSearch = () => {
  const value = searchQuery.value.toLowerCase()
  const products = store.state.products

  if (value.length === 0) {
    searchResults.value = []
  } else {
    const result = products.filter(p => p.title.toLowerCase().includes(value))

    if (result.length === 0) {
      searchResults.value = [{ title: "No results found", id: 'not_found' }]
    } else {
      searchResults.value = result
    }
  }
}

const handleBlur = () => {
  setTimeout(() => {
    isSearchOpen.value = false
  }, 200)
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  isSearchOpen.value = false
}

</script>

<template>
  <div class="searchbar">
    <div class="search-box">
      <input
        type="search"
        placeholder="Search for products"
        @input="handleSearch"
        @focus="isSearchOpen = true"
        @blur="handleBlur"
        v-model="searchQuery"
      />
      <button>
        <AkSearch />
      </button>
    </div>

    <div v-if="searchResults.length > 0 && isSearchOpen" class="search-info">
      <RouterLink
        v-for="(product, idx) in searchResults"
        :key="idx"
        :to="product.id !== 'not_found' ? `/product-details/${product.id}` : '#'"
        class="search-link"
        :class="{ last: idx === searchResults.length - 1 }"
        @click="clearSearch"
      >
        <h4>{{ product.title }}</h4>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  .search-box {
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    overflow: hidden;

    input {
      padding: 8px 12px;
      border: none;
      outline: none;
      width: 200px;
      font-size: 0.9rem;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;

      &:hover {
        color: #FB2E86;
      }
    }
  }

  .search-info {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-top: 4px;
    border: 1px solid #FB2E86;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .search-link {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      color: inherit;
      transition: background-color 0.2s;
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f5f5f5;
      }

      &.last {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
