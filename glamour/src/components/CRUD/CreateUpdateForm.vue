<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['toggle-modal'])

const form = reactive({
  title: '',
  price: '',
  discount: '',
  description: '',
  colors: [],
  // stars: '',
  // liked: false,
  // likes: []
})

function handleSubmit(e) {}

</script>

<template>
  <div>
    <div class="modal-screen">
      <div class="modal-content">
        <span id="close-modal" @click="emit('toggle-modal', false)">&times;</span>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="form.title" required placeholder="Enter title">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description" required placeholder="Enter description"></textarea>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" id="price" v-model="form.price" required placeholder="Enter price" min="0">
          </div>
          <div class="form-group">
            <label for="discount">Discount</label>
            <input type="number" id="discount" v-model="form.discount" required placeholder="Enter discount" min="0" max="99">
          </div>
          <div class="form-group">
            <label for="colors">Colors</label>
            <select name="colors" id="colors" v-model="form.colors" multiple required>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.modal-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @include flex();


  .modal-content {
    width: 550px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    @include flex(column, flex-start, center);

    #close-modal {
      position: absolute;
      top: 0;
      right: -30px;
      cursor: pointer;
      background-color: $light;
      color: $violet;
      font-weight: bold;
      font-size: 20px;
      @include circle(30px);
      @include flex();
    }

    form {
      width: 100%;
      height: 80vh;
      overflow-y: auto;
      @include flex(row, flex-start, center);


      .form-group {
        width: 100%;
        margin-bottom: 10px;

        label {
          display: block;
          margin-bottom: 5px;
        }

        input, textarea {
          display: block;
          width: 100%;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 10px;
          outline: none;
          border: none;
          background-color: #eee;
          border: 1px solid transparent;

          &:focus {
            border-color: $violet;
            background-color: $light;
          }

          &::placeholder {
            color: #aaa;
          }
        }

        textarea {
          min-height: 100px;
          resize: none;
        }
      }

      button {
        width: 100%;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: $violet;
        color: $light;
        cursor: pointer;

        &:hover {
          background: darken($violet, 10%);
        }
      }

      select {
        width: 100%;
        padding: 10px 20px;
        border-radius: 5px;
        margin-bottom: 10px;
        outline: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        option {
          padding: 5px 10px;
          border-radius: 5px;
          margin-bottom: 10px;
          outline: none;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
