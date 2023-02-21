<template>
  <button class="button" :class="flat ? 'button--flat' : ''">
    <slot/>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    flat: Boolean,
  })
</script>

<style lang="scss" scoped>
  .button {
    padding: 10px 8px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
    border: solid 2px var(--primary);  
    cursor: pointer;

    &--flat {
      background-color: transparent;
      color: var(--primary); 
    }
  }
</style>