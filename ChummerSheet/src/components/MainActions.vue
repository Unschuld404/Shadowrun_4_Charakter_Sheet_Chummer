<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="main-actions box">

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

    <div class="item">

      <div class="name">Powerblitz</div>
      <div class="formula" @click="openModal" >(F/2)+1</div>

    </div>

    <div class="item">

      <div class="name">Betäubungsblitz</div>
      <div class="formula" @click="openModal">(F/2)-1</div>

    </div>

    <div class="item">

      <div class="name">Verbesserte Unsichtbarkeit</div>
      <div class="formula" @click="openModal">(F/2)+1</div>

    </div>

    <div class="item">

      <div class="name">Levitieren</div>
      <div class="formula" @click="openModal">(F/2)+1</div>

    </div>

    <div class="item">

      <div class="name">Formwandeln</div>
      <div class="formula" @click="openModal">(F/2)+2</div>

    </div>

    <div class="lower-header">Aktionen</div>

  </div>

</template>

<style scoped>

.name {
  width: 80%;
}

.formula {
  width: 20%;
}

</style>