<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="nuyen box">

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">

        <div class="modify-pool">

          <button class="use-edge">EDGE</button>

          <div class="dice">00</div>

          <div class="modifyer">

            <button class="pool-modifyer">+</button>
            <button class="pool-modifyer">-</button>

          </div>

        </div>

        <div class="submit-roll">

          <button class="escape" @click="closeModal">ZURÜCK</button>
          <button class="submit">Los!</button>

        </div>

      </div>
    </div>

    <div class="nuyen-amount" @click="openModal">5600 ¥</div>
    <div class="lower-header">Nuyen</div>

  </div>

</template>

<style scoped>

.nuyen-amount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 3vh;
  color: var(--accent-color);
}

</style>