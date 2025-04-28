<script setup lang="ts">
import { RouterView } from 'vue-router'
import menuComponent from '././components/menuComponent.vue';
import footerComponent from './components/footerComponent.vue';
</script>

<template>
  <menuComponent/>
  <RouterView />
  <footerComponent/>
</template>

<style scoped>

</style>
