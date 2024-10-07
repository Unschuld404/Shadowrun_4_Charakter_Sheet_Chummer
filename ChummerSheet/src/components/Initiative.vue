<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="main-initiative box">

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

    <div class="initiatives">

      <div class="initiative">

        <div class="initiative-category">Normal</div>
        <button class="total-value" @click="openModal">7</button>

      </div>

      <div class="initiative">

        <div class="initiative-category">Matrix</div>
        <button class="total-value" @click="openModal">6</button>

      </div>

      <div class="initiative">

        <div class="initiative-category">Astral</div>
        <button class="total-value" @click="openModal">8</button>

      </div>

    </div>

    <div class="lower-header">Initiative</div>

  </div>

</template>

<style scoped>

.initiatives {
  display: flex;
  margin-top: 0.5vh;
}

.initiative {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
}

</style>