<script setup>
import { AnOutlinedUnorderedList, BsGridFill } from '@kalimahapps/vue-icons'

const props = defineProps({
  itemsPerPage: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  gridItems: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:itemsPerPage', 'sort', 'toggleGrid'])

function handlePerPage(e) {
  const perPage = Number(e.target.value)
  if (perPage > props.totalItems) {
    alert("The value is too big")
    e.target.value = props.totalItems
    emit('update:itemsPerPage', props.totalItems)
  } else if (perPage < 1) {
    alert("The value is too small")
    e.target.value = 1
    emit('update:itemsPerPage', 1)
  } else {
    emit('update:itemsPerPage', perPage)
  }
}

function sortItemsBy(e) {
  emit('sort', e.target.value)
}

function toggleGridItems(bool) {
  emit('toggleGrid', bool)
}
</script>

<template>
  <div class="filters-wrapper">
    <div class="left">
      <h4>Ecommerce Accessories & Fashion Item</h4>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="right">
      <div class="per-page">
        <p>Per page:
          <input id="per-page-input" type="number" min="1" :max="totalItems" @change="handlePerPage"
            :value="itemsPerPage">
        </p>
      </div>

      <div class="sort-by">
        <p>Sort By: </p>
        <select @change="sortItemsBy">
          <option value="low-price">Price: Low to High</option>
          <option value="high-price">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="high-star">Stars:low to high</option>
          <option value="low-star">Stars:high to low</option>
        </select>
      </div>

      <div class="view">
        <p>
          View:
          <span @click="toggleGridItems(true)">
            <BsGridFill />
          </span>
          <span @click="toggleGridItems(false)">
            <AnOutlinedUnorderedList />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters-wrapper {
  width: 1141px;
  margin: 20px auto;
  padding: 20px 0;
  @include grid(2);

  .right {
    display: flex;
    justify-content: space-between;

    input {
      width: 70px;
      padding: 10px;
      border-radius: 10px;
    }

    &>div {
      display: flex;
      align-items: center;
      justify-content: center;

      &.view {
        p {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 8px;

          span {
            svg {
              cursor: pointer;
              transform: scale(1.3);
              position: relative;
              bottom: 3px;
            }
          }
        }
      }
    }

    select {
      position: relative;
      left: 10px;
      bottom: 8px;
      padding: 5px;
      border-radius: 5px;
    }
  }
}
</style>
