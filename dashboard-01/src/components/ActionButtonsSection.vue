<script setup>
import {
  IconLanguage,
  IconMoonStars,
  IconLayoutGridAdd,
  IconBell,
  IconPointFilled,
} from "@tabler/icons-vue";

import Icon from "./Atoms/Icon.vue";

const icons = [IconLanguage, IconMoonStars, IconLayoutGridAdd, IconBell];
</script>
<template>
  <div class="py-2 flex items-center">
    <Icon
      v-for="icon in icons"
      :icon="icon"
      class="w-7 h-7 m-2 cursor-pointer"
      @click.prevent=""
    />

    <button class="relative mr-6 ml-2">
      <img
        class="w-38 h-38 rounded-full"
        src="../assets/avatar-01.png"
        alt=""
      />
      <Icon
        :icon="IconPointFilled"
        color="#2fb344"
        class="absolute stroke-white w-6 h-6 -right-2 -bottom-2"
      />
    </button>
  </div>
</template>

<style scoped></style>
