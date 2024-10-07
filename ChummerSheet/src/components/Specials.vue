<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="specials box">

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

      <div class="name">Kampfzauber</div>
      <div class="value">+ 2</div>

      <div class="button-box">
        <button class="total-value" @click="openModal">11</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Tiergeister beschwören</div>
      <div class="value">+ 2</div>

      <div class="button-box">
        <button class="total-value" @click="openModal">11</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Etwas anderes besonderes ...</div>
      <div class="value">+ 4</div>

      <div class="button-box">
        <button class="total-value" @click="openModal">9</button>
      </div>

    </div>

    <div class="lower-header">Boni</div>

  </div>

</template>

<style scoped>

.name {
  width: 80%;
}

.value {
  width: 10%;
}

.button-box {
  width: 10%
}

</style>