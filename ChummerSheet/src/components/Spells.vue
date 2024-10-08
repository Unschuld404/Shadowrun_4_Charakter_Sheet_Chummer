<script setup lang="ts">
import { computed } from 'vue';
import { data, getSpells } from '@/scripts/Data';

// Computed Property, das sich automatisch aktualisiert, wenn data sich ändert
const spells = computed(() => {
  return data.value ? getSpells() : [];
});

const spellcastingTotal = computed(() => {
  if (data.value && data.value.skills) {
    const skill = data.value.skills.find((skill: any) => skill.name === 'Spruchzauberei');
    return skill ? skill.total : 'N/A';
  }
  return 'N/A';
});
</script>

<template>

  <div class="spells-list">
    <ul>
      <li v-for="(spell, index) in spells" :key="index">
        <div class="box">
          <div class="spell-header">
            <div class="name">{{ spell.name }}</div>
            <button class="total-value">{{ spellcastingTotal }}</button>
          </div>
          <div class="info">
            <input type="checkbox" class="favourite">
            <div class="category">{{ spell.category }}</div>
            <div class="value">{{ spell.type }}</div>
            <div class="value">{{ spell.range }}</div>
            <div class="value">{{ spell.duration }}</div>
            <div class="formula">{{ spell.dv }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>

  .box {
    height: 15vh;
    padding-top: 2vh;
    padding-left: 4vh;
    padding-right: 4vh;
    margin-bottom: 2vh;
  }

  .spell-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--font-color);
  }

  button {
    margin-top: -0.3vh;
  }

  .name {
    height: 5vh;
    font-size: 3vh;
    font-weight: bold;
    color: var(--accent-color);
  }

  .info {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 3vh;
    height:8vh;
  }

  .value {
    width: 10%;
    text-align: center;
  }

  .category{
    width: 40%;
  }

  .formula{
    width: 20%
  }

</style>/