<template>
  <button class="button" :class="flat ? 'button--flat' : ''" :disabled="disabled">
    <slot/> 
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    flat: Boolean,
    disabled: Boolean,
  })
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    padding: 10px 8px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
    border: solid 1px var(--primary);  
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    overflow: hidden;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      background-color: var(--white);
      opacity: 0;
      transition: all ease-in-out 0.3s;
    }

    &--flat {
      background-color: transparent;
      color: var(--primary); 
      border: solid 1px transparent;  

      &::after {
        background-color: var(--primary);
      }
    }

    &:hover {
      &::after {
        opacity: 0.2;
      }
    }

    &:disabled {
      background-color: var(--accent2);
      border: solid 1px var(--accent2);
      cursor: not-allowed;
    }
  }
</style>