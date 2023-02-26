<template>
  <main>
    <AppHeader />
    <RouterView v-slot="{ Component }">
      <Transition name="show" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
  font-family: "Montserrat", sans-serif;
  color: var(--dark);
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

h1 {
  margin: 0;
  font-weight: 500;

  &.resizable {
    font-size: clamp(20px, 3vw, 24px);
  }
}


//transition between routes
.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s ease;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
}

//responsive
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
