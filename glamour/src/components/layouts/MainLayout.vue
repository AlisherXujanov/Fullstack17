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
      <SpinnerVue />
    </main>
    <main>
      <RouterView />
    </main>

    <footer>
      <FooterVue />
    </footer>
  </div>
</template>


<style lang="scss"></style>
