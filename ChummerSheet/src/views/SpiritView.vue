<script setup lang="ts">

  import Spirits from "@/components/Spirits.vue";
  import { useRollDialogue } from "@/Scripts/Dialogue";

  const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <!-- Dialogue for Summoning Spirits -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content-summoning">
      <i class='bx bx-x close' @click="closeModal"></i>
      <div class="dice-roll">
        <div class="spirit-power">Kraft: </div>
        <div class="dice-pool">00</div>
        <div class="modify">
          <i class='bx bx-chevron-up mod'></i>
          <i class='bx bx-chevron-down mod' ></i>
        </div>
      </div>
      <button class="spirit-resistance">DER GEIST WEHRT SICH!</button>
      <div class="dice-roll">
        <div class="boost">EDGE</div>
        <div class="dice-pool">00</div>
        <div class="modify">
          <i class='bx bx-chevron-up mod'></i>
          <i class='bx bx-chevron-down mod' ></i>
        </div>
      </div>
      <button class="confirm">BESCHWÖRE IHN!</button>
    </div>
  </div>

  <div class="collection">
    <div class="flex-scroll">
      <Spirits />
    </div>
    <div class="add" @click="openModal">+</div>
  </div>
</template>

<style scoped>

.add {
  margin-top: 2vh;
}

</style>
