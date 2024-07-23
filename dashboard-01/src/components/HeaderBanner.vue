<script setup>
import Icon from "./Atoms/Icon.vue";
import { IconCornerLeftDown } from "@tabler/icons-vue";
import ToggleSwitch from "./Atoms/ToggleSwitch.vue";

import { ref, watch } from "vue";
const isMonthly = ref(false);

const emit = defineEmits(["updatePlan"]);

watch(isMonthly, () => {
  emit("updatePlan");
});
</script>

<template>
  <div
    class="flex gap-2 flex-col justify-items-center items-center text-center"
  >
    <h1 class="text-primary text-lg font-medium leading-h1-height text-h1-size">
      Pricing Plans
    </h1>
    <div class="leading-text-height text-textColor text-text-size">
      <p>
        All plans include 40+ advanced tools and features to boost your product.
      </p>
      <p>Choose the best plan to fit your needs.</p>
    </div>
    <div class="flex justify-items-center ml-260px">
      <Icon
        :icon="IconCornerLeftDown"
        class="mt-15px w-9 h-9"
        color="#2F2B3D66"
      />
      <p
        class="text-menuActiveLight my-7.5px px-2.5 py-1 rounded-lg bg-menuActiveBackgroundDark peer-checked:bg-red-400"
      >
        Save up to 10%
      </p>
    </div>
    <div
      class="flex gap-2 font-medium text-text-size text-textColor items-center"
    >
      <p class="py-2">Monthly</p>
      <ToggleSwitch v-model="isMonthly" />
      <p class="py-2">Annually</p>
    </div>
  </div>
</template>

<style scoped></style>
