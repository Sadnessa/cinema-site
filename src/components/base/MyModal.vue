<template>
  <Transition name="show" mode="out-in">
    <div class="modal" v-if="openModal">
      <div class="modal__card">
        <h1 class="resizable">
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
  </Transition>
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
  z-index: 2;

  &__card {
    width: 400px;
    background-color: var(--white);
    border-radius: 6px;
    padding: 20px;
    text-align: center;
    margin: 0 10px;

    hr {
      color: var(--light);
    }
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
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

//transition
.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s ease;
  .modal__card {
    transition: transform 0.5s ease;
  }
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
  .modal__card {
    transform: translateY(30px);
  }
}
</style>
