<template>
  <div v-touch:swipe.left="onSwipeLeft" v-touch:swipe.right="onSwipeRight">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onSwipeLeft() {
  router.push('/next-view');  // Passe den Route-Pfad an
}

function onSwipeRight() {
  router.push('/previous-view');  // Passe den Route-Pfad an
}
</script>
