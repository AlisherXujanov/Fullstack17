<script setup>
import { ref, reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { BASE_URL } from '@/store'
import axios from "axios"


const emit = defineEmits(['toggle-modal'])
const form = reactive({
  title: '',
  price: '',
  discount: '',
  description: '',
  colors: [],
  pictureUrl: "",
  // stars: '',
  // liked: false,
  // likes: []
})
async function handleSubmit(e) {
  try {
    for (let key in form) {
      if (form[key] === "") {
        toast(`${key} is required`, { autoClose: 3000, type: 'error' })
        return
      }
    }
    const data = {
      ...form,
      "stars": 3, "liked": false,
      "likes": [2, 5, 9]
    }
    const URL = `${BASE_URL}/shopListItems`
    await axios.post(URL, data)
    emit('toggle-modal', false)
    toast('Product created successfully', { autoClose: 3000, type: 'success' })
  } catch (error) {
    console.error('Error creating product:', error)
    toast(error.response?.data?.message || 'Failed to create product', {
      autoClose: 3000,
      type: 'error'
    })
  }
}

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
            <input type="number" id="discount" v-model="form.discount" required placeholder="Enter discount" min="0"
              max="99">
            <small class="text-muted">Discount is in percentage (0-99). Example: 50 which is 50% off</small>
          </div>
          <div class="form-group">
            <label for="colors">Colors</label>
            <select name="colors" id="colors" v-model="form.colors" multiple required>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
            <small class="text-muted">You can select multiple colors as product can have multiple colors</small>
          </div>
          <div class="form-group">
            <label for="pictureUrl">Picture URL</label>
            <input type="url" id="pictureUrl" v-model="form.pictureUrl" required placeholder="https://...">
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

        input,
        textarea {
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
