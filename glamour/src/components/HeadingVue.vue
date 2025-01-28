<script setup>
// props =>  are the data that is passed from the
//           parent component to the child component
defineProps({
  heading: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
})

{/* <HeadingVue heading='...' /> */}

</script>

<template>
  <div class="main-heading-wrapper">
    <h1 class="heading">{{ heading }}</h1>
    <p class="path">{{ path }}</p>
  </div>
</template>


<style lang='scss' scoped>
.main-heading-wrapper {
  padding: 50px 200px;
  @include flex(column, flex-start, flex-start);
  background-color: $light-violet;
}
</style>
