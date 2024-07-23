<script setup>
import { icons, IconSearch } from "@tabler/icons-vue";
import Icon from "./Atoms/Icon.vue";
</script>

<template>
  <div class="ml-4 flex">
    <Icon
      :icon="IconSearch"
      class="m-2 cursor-pointer h-6 w-6"
      @click.prevent=""
    />

    <input
      class="text-disabled my-2 ml-2 focus:outline-none w-full"
      type="text"
      placeholder="Search ⌘K"
    />
  </div>
</template>

<style scoped></style>
