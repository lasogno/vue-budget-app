<template>
  <Transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <Transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <slot />
          <button @click="closeHandler" class="button button-close">
            Close
          </button>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  modalActive: Boolean,
});

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeHandler = () => emit("close");
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);

  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: white;
    padding: 64px 16px;

    .button-close {
      position: absolute;
      bottom: 15px;
      right: 30px;
      color: white;
      background-color: #e74c3c;
    }
  }
}
</style>
