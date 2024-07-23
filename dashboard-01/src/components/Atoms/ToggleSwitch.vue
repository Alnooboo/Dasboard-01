<script setup>
import { ref } from "vue";

const props = defineProps({
  //read only value
  modelValue: {
    type: Boolean,
    default: false,
  },
});

//to send a value from child to parent
const emit = defineEmits(["update:modelValue"]);

const model = ref(props.modelValue);
</script>

<template>
  <label class="relative inline-flex cursor-pointer items-center">
    <input
      id="switch"
      type="checkbox"
      class="peer sr-only"
      v-model="model"
      @change="emit('update:modelValue', model)"
    />
    <label for="switch" class="hidden"></label>
    <div
      class="peer rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
      :class="'w-11 h-6 after:h-5 after:w-5 peer-checked:bg-menuActiveLight'"
    ></div>
  </label>
</template>
