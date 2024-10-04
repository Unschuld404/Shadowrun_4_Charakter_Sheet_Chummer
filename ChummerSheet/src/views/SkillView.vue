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

</template>

<style>

</style>
