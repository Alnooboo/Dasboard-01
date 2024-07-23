<script setup>
import HeaderBanner from "../components/HeaderBanner.vue";
import Row from "../components/Row.vue";
import { ref } from "vue";

const selectedPlan = ref(false);
</script>

<template>
  <div
    class="w-1132 h-983 bg-white rounded-lg design-shadow flex flex-col gap-6 justify-items-center items-center px-25 py-16"
  >
    <HeaderBanner @updatePlan="selectedPlan = !selectedPlan" />
    <Row :isMonthly="selectedPlan" />
  </div>
</template>
