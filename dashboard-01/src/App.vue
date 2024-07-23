<script setup>
import SideBar from "./components/SideBar.vue";
// import Screen from "./views/Screen.vue";
import SearchBar from "./components/SearchBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-screenBackground w-1440 h-1157 flex">
    <SideBar />
    <!-- <Screen /> -->

    <div class="w-1180 h-1157 flex flex-col gap-6 rounded-lg px-6 pt-4">
      <SearchBar />

      <RouterView v-slot="{ Component }">
        <component :is="Component" class="flex-auto"></component>
      </RouterView>

      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
