<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['pageChange'])

function range(start, end = null) {
  if (end === null) {
    end = start
    start = 0
  }
  return Array(end - start).fill().map((_, idx) => start + idx)
}

const pagesToShow = computed(() => {
  return range(1, props.totalPages + 1)
})

function activatePage(page) {
  if (page >= 1 && page <= props.totalPages) {
    emit('pageChange', page)
  }
}
</script>

<template>
  <div class="paginator-wrapper">
    <div v-for="page in pagesToShow"
         :key="page"
         @click="activatePage(page)"
         class="paginator-number"
         :class="{ active: page === currentPage }">
      {{ page }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paginator-wrapper {
  margin: 50px auto;
  @include flex();

  .paginator-number {
    padding: 5px;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    background-color: #eee;
    cursor: pointer;
    @include flex();

    &.active,
    &:hover {
      background-color: $red;
      color: $light;
      border: 1px solid $red;
      outline: 3px solid #FB2E8650;
    }
  }
}
</style>
