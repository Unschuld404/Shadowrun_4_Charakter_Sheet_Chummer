<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCharacterData } from '../composables/useCharacterData'; // Pfad zur neuen Datei

const { data, fetchData, getTotalValue, getSkillProperty, getSpellProperty, getArmorProperty } = useCharacterData('Kaya');

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

onMounted(() => {
    fetchData();
});
</script>

<template>

    <div class="skills">

        <div class="active-skills">

            <div class="lower-header">Aktionsfertigkeit</div>
            <div class="nuyen-amount" v-if="data">{{ data.character.nuyen }}</div>

        </div>

        <div class="knowledge-skills">

            <div class="lower-header">Wissensfertigkeit</div>

        </div>

    </div>

</template>

<style>

.skills {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 80vh;
    margin-top: 5vh;
}

.active-skills, .knowledge-skills {
    width: 49%;
    background-color: var(--primary-color);
    border-radius: 5vh;
    position: relative;
}

.lower-header {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    text-align: center;
}

</style>
