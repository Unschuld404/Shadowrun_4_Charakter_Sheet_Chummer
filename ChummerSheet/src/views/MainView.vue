<script setup lang="ts">
import Edge from "@/components/Edge.vue";
import Initiative from "@/components/Initiative.vue";
import MainActions from "@/components/MainActions.vue";
import MainSkills from "@/components/MainSkills.vue";
import Nuyen from "@/components/Nuyen.vue";
import PhysicalMonitor from "@/components/PhysicalMonitor.vue";
import Resistance from "@/components/Resistance.vue";
import StunMonitor from "@/components/StunMonitor.vue";
import Specials from "@/components/Specials.vue";
</script>

<template>

            <div class="container">

              <Edge/>

              <Initiative/>

              <MainSkills/>

              <MainActions/>

              <Nuyen/>

              <PhysicalMonitor/>

              <Resistance/>

              <Specials/>

              <StunMonitor/>

            </div>

</template>

<style scoped>

  .nuyen {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 10;
      grid-column-end: 11;
  }

  .edge {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 9;
      grid-column-end: 10;
  }

  .main-initiative {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 7;
      grid-column-end: 9;
  }

  .main-resistance {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 7;
      grid-column-end: 11;
  }

  .main-skills {
      grid-row-start: 1;
      grid-row-end: 8;
      grid-column-start: 1;
      grid-column-end: 4;
  }

  .specials {
    grid-row-start: 3;
    grid-row-end: 5;
    grid-column-start: 7;
    grid-column-end: 11;
  }

  .body-condition {
    grid-row-start: 5;
    grid-row-end: 8;
    grid-column-start: 7;
    grid-column-end: 9;
  }

  .stun-condition {
      grid-row-start: 5;
      grid-row-end: 8;
      grid-column-start: 9;
      grid-column-end: 11;
  }

  .main-actions {
      grid-row-start: 1;
      grid-row-end: 8;
      grid-column-start: 4;
      grid-column-end: 7;
  }

</style>
