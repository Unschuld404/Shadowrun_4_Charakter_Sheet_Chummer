<script setup lang="ts">

import { useRollDialogue } from "@/Scripts/RollDialogue";

const { showModal, openModal, closeModal } = useRollDialogue();

</script>

<template>

  <div class="main-skills box">

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

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="item">

      <div class="name">Lieblingsfertigkeit</div>
      <div class="value">Wert + Attr.</div>

      <div class="button-box">
        <button class="total-value">00</button>
      </div>

    </div>

    <div class="lower-header">Fertigkeiten</div>

  </div>

</template>

<style scoped>

.name {
  width: 60%;
}

.value {
  width: 30%;
}

.button-box {
  width: 10%
}

</style>