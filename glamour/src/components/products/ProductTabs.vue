<script setup>
import { BsArrowRight } from '@kalimahapps/vue-icons';

defineProps({
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="product-tabs">
    <div class="tabs-header">
      <a href="#description">Description</a>
      <a href="#additional-info">Additional Info</a>
      <a href="#reviews">Reviews</a>
      <a href="#video">Video</a>
    </div>
    <div class="tabs-content">
      <div class="description-section" id="description">
        <h1>Product Description</h1>
        <p>
          {{ description }}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae
          eos esse tenetur debitis perspiciatis dolorum sit aliquam accusantium.
          Non sequi, dolore harum earum dolorem velit at facere autem? Soluta nobis
          voluptates quod neque!
        </p>
      </div>
      <div class="additional-info-section" id="additional-info">
        <h1>More Details</h1>
        <p><BsArrowRight/> Premium quality materials that are built to last</p>
        <p><BsArrowRight class="color"/> Modern design that fits with any interior style</p>
        <p><BsArrowRight/> Ergonomic design for comfort and practical use</p>
        <p><BsArrowRight/> Environmentally friendly production process</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-tabs {
  background-color: $violet-lighter;
  padding: 100px 95px;

  .tabs-header {
    a {
      color: $dark-blue;
      margin-right: 50px;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;

      &:first-child {
        text-decoration: underline $dark-blue;
      }
    }
  }

  .tabs-content {
    .description-section {
      h1 {
        color: $dark-blue;
        font-size: 20px;
        margin-top: 35px;
        margin-bottom: 10px;
      }

      p {
        color: $text-color-transparent;
        font-size: 16px;
      }
    }

    .additional-info-section {
      margin-top: 35px;

      h1 {
        color: $dark-blue;
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        color: $text-color-transparent;

        svg {
          font-size: 25px;
          color: $dark-blue;
        }

        .color {
          color: $dark-blue;
        }
      }
    }
  }
}
</style>
