<script setup>
import { reactive, onMounted, ref, defineAsyncComponent, provide, onBeforeUnmount } from 'vue'
import { BASE_URL } from '@/store'
import axios from 'axios'
import HeadingVue from '@/components/HeadingVue.vue'

// Convert synchronous imports to async components
const SpinnerVue = defineAsyncComponent(() => import('@/components/SpinnerVue.vue'))
const ItemsWrapper = defineAsyncComponent(() => import('@/components/products/ItemsWrapper.vue'))

import { AnOutlinedUnorderedList } from '@kalimahapps/vue-icons'
import { BsGridFill } from '@kalimahapps/vue-icons'

const store = reactive({
    items: [],
    itemsPerPage: 4
})
const loaded = ref(true) // Загружены ли данные
const gridItems = ref(false)

async function getItems() {
    loaded.value = false
    try {
        const response = await axios.get(`${BASE_URL}/shopListItems`)
        const data = await response.data
        store.items.push(...data)
        console.log(store.items)
    }
    catch (e) {
        console.log("Ooops! Something went wrong!")
        console.log(e)
    }
    finally {
        loaded.value = true
    }
}

function toggleGridItems(bool) {
    gridItems.value = bool
    console.log("gridItemsOnShop: ", gridItems.value)
}


onMounted(() => {
    getItems()
    gridItems.value = localStorage.getItem("gridItemsOnShop") || false
})
onBeforeUnmount(() => {
    localStorage.setItem("gridItemsOnShop", gridItems.value)
})


function toggleLike(itemID) {
    const item = store.items.find(i => i.id == itemID)
    item.liked = !item.liked
}

function sortItemsBy(e) {
    switch (e.target.value) {
        case "low-price":
            store.items.sort((a, b) => a.price - b.price)
            break
        case "high-price":
            store.items.sort((a, b) => b.price - a.price)
            break
        default:
            store.items.sort((a, b) => a.id - b.id)
    }
}

function handlePerPage(e) {
    const perPage = e.target.value
    if (perPage > store.items.length) {
        alert("The value is too big")
        e.target.value = store.items.length
    } else if (perPage < 0) {
        alert("The value is too small")
        e.target.value = 0
    }
}


</script>

<template>
    <div>
        <heading-vue heading="Shop" path="Shop . Pages . Shop" />

        <div class="filters-wrapper">
            <div class="left">
              <h4>Ecommerce Accessories & Fashion Item</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="right">
                <div class="per-page">
                    <p>Per page:
                        <input
                            id="per-page-input"
                            type="number"
                            min="0"
                            :max="store.items.length"
                            @change="handlePerPage"
                            v-model="store.itemsPerPage"
                        >
                    </p>
                </div>

                <div class="sort-by">
                    <p>Sort By: </p>
                    <select @change="sortItemsBy" >
                        <option value="">Best Match</option>
                        <option value="low-price">Price: Low to High</option>
                        <option value="high-price">Price: High to Low</option>
                        <option value="">Newest</option>
                        <option value="">Oldest</option>
                    </select>
                </div>

                <div class="view">
                    <p>
                        View:
                        <span @click="toggleGridItems(true)"><BsGridFill/></span>
                        <span @click="toggleGridItems(false)"><AnOutlinedUnorderedList/></span>
                    </p>
                </div>
            </div>
        </div>

        <div class="shop-list-items-wrapper">
            <div v-if="!loaded">
                <SpinnerVue />
            </div>
            <div v-else>
                <items-wrapper
                    :items="store.items.slice(0, store.itemsPerPage)"
                    :gridItems="gridItems"
                    @toggle-like="toggleLike"
                />
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
.shop-list-items-wrapper {
    width: 1141px;
    margin: 0 auto;
}
</style>
