<!-- <script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import Icon from "./Atoms/Icon.vue";
import {
  IconCircle,
  IconChevronRight,
  IconChevronDown,
} from "@tabler/icons-vue";

defineProps({
  nav: { type: Object, required: true },
});

const expanded = ref({});

function toggleChildren(name) {
  console.log("expanded:");
  console.log(expanded.value);
  expanded.value[name] = !expanded.value[name];
}

function isExpanded(name) {
  return expanded.value[name];
}

function componentArguments(element) {
  return {
    notif: element.notifications,
    class: [
      element.type !== "section" &&
        "hover:bg-gradient-to-r from-menuActive to-menuActiveDark hover:rounded-lg hover:text-white focus:bg-actionSelected focus:rounded-lg",
      element.type !== "section" &&
        isExpanded(element.name) &&
        "bg-actionSelected rounded-lg",
      element.type !== "section" && "py-2",
      "w-full flex items-center pb-2.5 text-primary text-text-size font-normal font-puplic-sans font-bold elementName",
    ],
  };
}
</script>
<template>
  <li>
    <component
      :is="nav.children ? 'button' : 'RouterLink'"
      :to="!nav.children ? nav.link : null"
      v-bind="componentArguments(nav)"
      @click="toggleChildren(nav.name)"
    >
      <template v-if="nav.type !== 'section'">
        <icon
          :icon="nav.icon ? nav.icon : IconCircle"
          position="left"
          class="mx-2"
          :class="!nav.icon ? 'w-4 h-4' : 'w-6 h-6'"
        />
      </template>

      <p :class="nav.type === 'section' && 'my-1 py-2 px-3 text-disabled'">
        {{ nav.name }}
      </p>
      <template v-if="nav.type === 'group'">
        <p
          v-if="nav.notifications"
          class="w-8 h-6 rounded-full text-white bg-errorMain text-center ml-auto mr-2"
        >
          {{ nav.notifications }}
        </p>
        <icon
          :icon="IconChevronRight"
          :notif="nav.notifications"
          class="w-6 h-6 mr-2"
          :class="!nav.notifications && 'ml-auto'"
        />
      </template>
    </component>
    <ul class="pl-1" v-if="isExpanded(nav.name) || nav.type === 'section'">
      <NavigationElement
        v-for="child in nav.children"
        :key="child.name"
        :nav="child"
        :prevKey="nav.name"
      />
    </ul>
  </li>
</template>
<style scoped></style> -->

<script setup>
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";
import Icon from "./Atoms/Icon.vue";
import { IconCircle, IconChevronRight } from "@tabler/icons-vue";

const props = defineProps({
  nav: { type: Object, required: true },
  expandedLink: { type: String, required: true },
});

const emit = defineEmits(["toggle-children"]);

function isExpanded(link) {
  return props.expandedLink.includes(link);
}

function toggleChildren(link) {
  emit("toggle-children", link);
}

function componentArguments(element) {
  return {
    notif: element.notifications,
    class: [
      element.type !== "section" &&
        "hover:bg-gradient-to-r from-menuActive to-menuActiveDark hover:rounded-lg hover:text-white focus:bg-actionSelected focus:rounded-lg",
      element.type !== "section" &&
        isExpanded(element.link) &&
        "bg-actionSelected rounded-lg",
      element.type !== "section" && "py-2",
      "w-full flex items-center pb-2.5 text-primary text-text-size font-normal font-puplic-sans font-bold elementName mx-2 !w-236",
    ],
  };
}
</script>
<template>
  <li>
    <component
      :is="nav.children ? 'button' : 'RouterLink'"
      :to="!nav.children ? nav.link : null"
      v-bind="componentArguments(nav)"
      @click="toggleChildren(nav.link)"
    >
      <template v-if="nav.type !== 'section'">
        <icon
          :icon="nav.icon ? nav.icon : IconCircle"
          position="left"
          class="mx-2"
          :class="!nav.icon ? 'w-4 h-4' : 'w-6 h-6'"
        />
      </template>

      <p :class="nav.type === 'section' && 'my-1 py-2 px-3 text-disabled'">
        {{ nav.name }}
      </p>
      <template v-if="nav.type === 'group'">
        <p
          v-if="nav.notifications"
          class="w-8 h-6 rounded-full text-white bg-errorMain text-center ml-auto mr-2"
        >
          {{ nav.notifications }}
        </p>
        <icon
          :icon="IconChevronRight"
          :notif="nav.notifications"
          class="w-6 h-6 mr-2"
          :class="!nav.notifications && 'ml-auto'"
        />
      </template>
    </component>
    <ul class="pl-1" v-if="isExpanded(nav.link) || nav.type === 'section'">
      <NavigationElement
        v-for="child in nav.children"
        :key="child.name"
        :nav="child"
        :expandedLink="expandedLink"
        @toggle-children="$emit('toggle-children', $event)"
      />
    </ul>
  </li>
</template>

<style scoped></style>

<!-- <script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import { useRouter, RouterLink } from "vue-router";
import Icon from "./Atoms/Icon.vue";
import {
  IconCircle,
  IconChevronRight,
  IconChevronDown,
} from "@tabler/icons-vue";

defineProps({
  nav: {
    type: Object,
    required: true,
  },
  previousKey: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["toggle-click"]);

function isOpen(prevKey, navName) {
  return prevKey === navName;
}

function handleClick(navName) {
  emit("toggle-click", navName);
}
</script>

<template>
  <li>
    <component
      :is="nav.children ? 'button' : 'RouterLink'"
      class="w-full flex items-center pb-2.5"
      :class="nav.type !== 'section' && 'py-2'"
      :to="!nav.children ? nav.link : null"
      @click="handleClick(nav.name)"
    >
      <template v-if="nav.type !== 'section'">
        <icon
          :icon="nav.icon ? nav.icon : IconCircle"
          position="left"
          class="mx-2"
          :class="!nav.icon ? 'w-4 h-4' : 'w-6 h-6'"
        />
      </template>

      <p
        class="text-text-size text-primary font-normal font-puplic-sans font-bold"
        :class="nav.type === 'section' && 'my-1 py-2 px-3 text-disabled'"
      >
        {{ nav.name }}
      </p>

      <template v-if="nav.type === 'group'">
        <p
          v-if="nav.notifications"
          class="w-8 h-6 rounded-full text-white bg-errorMain text-center ml-auto mr-2"
        >
          {{ nav.notifications }}
        </p>

        <icon
          :icon="IconChevronRight"
          :notif="nav.notifications"
          class="w-6 h-6 mr-2"
          :class="!nav.notifications && 'ml-auto'"
        />
      </template>
    </component>
    <ul
      class="pl-1"
      v-if="isOpen(previousKey, nav.name) || nav.type === 'section'"
    >
      <NavigationElement
        v-for="child in nav.children"
        :key="child.name"
        :nav="child"
        :previousKey="previousKey"
        @toggle-click="$emit('toggle-click', $event)"
      />
    </ul>
  </li>
</template>

<style scoped></style> -->
