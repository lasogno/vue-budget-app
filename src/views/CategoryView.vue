<template>
  <main class="category main-block">
    <h1>This is a category page</h1>
    <button @click="toggleModal" type="button" class="button">
      Add a new category
    </button>
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h1>New category</h1>
        <label for="category-name">Enter a name</label>
        <input placeholder="Name" name="category-name" />
      </div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "@/components/ModalComponent.vue";
const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss">
.category {
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1,
    p {
      margin-bottom: 16px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>
