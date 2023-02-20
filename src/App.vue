<template>
  <main>
    <AppHeader />
    <RouterView />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue"
</script>

<style lang="scss">
body {
  margin: 0;
}

section {
  background-color: var(--light);
}

.container {
  padding: 20px 40px;
}
</style>
