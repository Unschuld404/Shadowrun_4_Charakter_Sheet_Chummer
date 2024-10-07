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

  <div class="collection">

    <div class="column">
      <div class="row">
        <Nuyen/>
        <Edge/>
        <Initiative/>
      </div>
      <Resistance/>
      <Specials/>
      <div class="row">
        <PhysicalMonitor/>
        <StunMonitor/>
      </div>
    </div>
    <div class="column">
      <MainSkills/>
    </div>
    <div class="column">
      <MainActions/>
    </div>
  </div>

</template>

<style scoped>

  .collection {
    display: flex;
    gap: 1vh;
  }
  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1vh;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    gap: 1vh;
  }

  .box {
    border: 1px solid var(--font-color);
  }

</style>
