<script setup lang="ts">
import Weapons from "@/components/Weapons.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateLeft = () => {
  router.push({ name: 'Hub' });
};

const navigateRight = () => {
  router.push({ name: 'Fahrzeuge' });
};

</script>

<template>

  <div v-touch:swipe.left="navigateLeft"
       v-touch:swipe.right="navigateRight">

    <div class="collection">
      <div class="flex-scroll">
        <Weapons/>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
