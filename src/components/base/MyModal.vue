<template>
  <div class="modal" v-if="openModal">
    <div class="modal__card">
      <h1>
        <slot name="header"></slot>
      </h1>
      <hr noshade />
      <div class="content">
        <slot />
      </div>
      <div class="modal__buttons">
        <MyButton flat @click="onDecline">Отклонить</MyButton>
        <MyButton @click="$emit('submitClick')">Подтвердить</MyButton>
      </div>
    </div>
    <div class="modal__overlay"></div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./MyButton.vue";
import { computed } from "vue";

const props = defineProps({
  openModal: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["update:openModal", "submitClick"]);

const openModal = computed({
  get() {
    return props.openModal;
  },
  set(value) {
    emits("update:openModal", value);
  },
});

const onDecline = () => {
  openModal.value = false;
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &__card {
    width: 400px;
    background-color: var(--white);
    border-radius: 6px;
    padding: 20px;
    text-align: center;

    hr {
      color: var(--light);
    }
  }

  &__buttons {
    display: flex;
    gap: 20px;

    .button {
      flex-grow: 1;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
    opacity: 0.4;
    z-index: -10;
  }
}
</style>
