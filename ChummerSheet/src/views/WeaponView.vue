<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showModal = ref(false);

function openModal() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

</script>

<template>

</template>

<style scoped>

</style>
