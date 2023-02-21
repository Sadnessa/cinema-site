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

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

section {
  background-color: var(--light);
  flex-grow: 1;
}

.container {
  padding: 20px 40px;
}
</style>
