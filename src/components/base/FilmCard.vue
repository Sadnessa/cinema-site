<template>
  <div class="card">
    <img :src="img">
    <div class="card__description">
      fffff
    </div>
    <div class="card__actions">
      lddkdk
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    img: {
      type: String,
      default: "https://picsum.photos/400/200",
    }
  })
</script>

<style lang="scss" scoped>
  .card {
    max-width: 30%;
    background-color: var(--white);
    overflow: hidden;
    border-radius: 6px;
  }
</style>