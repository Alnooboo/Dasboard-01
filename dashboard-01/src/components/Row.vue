<script setup>
import Icon from "./Atoms/Icon.vue";
import { IconPointFilled } from "@tabler/icons-vue";
const plansData = [
  {
    name: "Basic",
    description: "A simple start for everyone",
    monthly: 2,
    yearly: 46,
    img: "/img/dollar-coins-flying-pink-piggy-bank_1150-51400 1.png",
    details: [
      "100 responses a month",
      "Unlimited forms and surveys",
      "Unlimited fields",
      "Basic form creation tools",
      "Up to 2 subdomains",
    ],
    buttonColor: "text-successMain bg-successOpacityLight",
    buttonText: "Your Current Plan",
  },
  {
    name: "Standard",
    description: "A simple start for everyone",
    monthly: 49,
    yearly: 600,
    img: "/img/3d-safe-box-with-golden-dollar-coins_23-2148938918 (1).png",
    details: [
      "100 responses a month",
      "Unlimited forms and surveys",
      "Unlimited fields",
      "Basic form creation tools",
      "Up to 2 subdomains",
    ],
    buttonColor: "text-white bg-menuActiveLight",
    buttonText: "Upgrade",
    condition: "Popular",
  },
  {
    name: "Enterprise",
    description: "A simple start for everyone",
    monthly: 99,
    yearly: 1200,
    img: "/img/3d-space-rocket-with-smoke_23-2148938939 2.png",
    details: [
      "100 responses a month",
      "Unlimited forms and surveys",
      "Unlimited fields",
      "Basic form creation tools",
      "Up to 2 subdomains",
    ],
    buttonColor: "bg-menuActiveBackgroundDark text-menuActive",
    buttonText: "Upgrade",
  },
];

const props = defineProps({
  isMonthly: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex gap-6">
    <div
      v-for="plan in plansData"
      class="w-294.67 border border-whiteShadow rounded-lg flex flex-col gap-5 justify-items-center items-center px-5 pt-4 pb-6"
    >
      <p
        v-if="plan.condition"
        v-text="plan.condition"
        class="bg-menuActiveBackgroundDark text-menuActive px-2 rounded-md ml-auto"
      ></p>
      <img
        :class="plan.condition ? 'mt-4' : 'mt-60px'"
        :src="plan.img"
        alt="dollar coins flying"
      />
      <div>
        <h2
          class="font-medium text-primary text-h2-size leading-h2-height text-center"
          v-text="plan.name"
        ></h2>
        <p
          class="leading-text-height text-textColor text-text-size"
          v-text="plan.description"
        ></p>
      </div>
      <div class="flex mb-18px">
        <p class="leading-text-height text-textColor text-text-size">$</p>
        <p
          class="text-price-size text-menuActiveLight text-price-height font-medium mt"
          v-text="!isMonthly ? plan.monthly : plan.yearly"
        ></p>
        <p
          class="leading-text-height text-textColor text-text-size mt-11"
          v-text="`/${!isMonthly ? 'Month' : 'Year'}`"
        ></p>
      </div>
      <ul
        class="flex flex-col gap-4 leading-text-height text-textColor text-text-size"
      >
        <li v-for="plandetail in plan.details" class="flex items-center gap-2">
          <Icon :icon="IconPointFilled" class="w-3 h-3" color="#2F2B3D66" />
          <p v-text="plandetail"></p>
        </li>
      </ul>
      <button
        class="w-254.67 px-16 py-2 text-center rounded-lg"
        :class="plan.buttonColor"
        v-text="plan.buttonText"
      ></button>
    </div>
  </div>
</template>

<style scoped></style>
