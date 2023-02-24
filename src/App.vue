<template>
  <main>
    <AppHeader />
    <RouterView />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
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
  margin: 0 auto;
  padding: 20px;
}

@include xl {
  .container {
    max-width: 1320px;
  }
}

@include lg {
  .container {
    max-width: 1140px;
  }
}

@include md {
  .container {
    max-width: 960px;
  }
}

@include sm {
  .container {
    max-width: 720px;
  }
}

@include xs {
  .container {
    max-width: 540px;
  }
}
</style>
