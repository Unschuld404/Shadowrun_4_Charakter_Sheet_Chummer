<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="main-resistance box">

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

    <div class="resistances">

      <div class="resistance">

        <div class="resistance-category">Ballistisch</div>
        <button class="total-value" @click="openModal">6</button>

      </div>

      <div class="resistance">

        <div class="resistance-category">Stoß</div>
        <button class="total-value" @click="openModal">8</button>

      </div>

      <div class="resistance">

        <div class="resistance-category">Körperlich</div>
        <button class="total-value" @click="openModal">4</button>

      </div>

      <div class="resistance">

        <div class="resistance-category">Willenskraft</div>
        <button class="total-value" @click="openModal">6</button>

      </div>

      <div class="resistance">

        <div class="resistance-category">Entzug</div>
        <button class="total-value" @click="openModal">6</button>

      </div>

    </div>

    <div class="lower-header">Widerstand</div>

  </div>

</template>

<style scoped>

  .resistances {
    display: flex;
    margin-top: 0.5vh;
  }

  .resistance {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }

</style>