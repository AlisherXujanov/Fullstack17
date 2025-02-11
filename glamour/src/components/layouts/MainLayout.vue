<script setup>
import { RouterView } from 'vue-router'
import FooterVue from '../FooterVue.vue'
import NavVue from '../NavVue.vue'
import { useAuth } from '@/composables/useAuth.js'
import SpinnerVue from "@/components/SpinnerVue.vue";

const { _, isLoading } = useAuth()

</script>


<template>
  <div>
    <header>
      <NavVue />
    </header>

    <main v-if="isLoading">
      <div class="loading-spinner">
        <SpinnerVue />
      </div>
    </main>
    <main>
      <RouterView />
    </main>

    <footer>
      <FooterVue />
    </footer>
  </div>
</template>


<style lang="scss">
.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999999;
  backdrop-filter: blur(10px);
  background-color: rgb(0, 0, 0, 0.5);
  @include flex();
}
</style>
