<script setup>
import {
  IconCircle, //IconCircle
} from "@tabler/icons-vue";

const props = defineProps({
  icon: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <component :is="props.icon" stroke="{2}" />
</template>
