<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const darkMode = () => {
  const clsList = document.documentElement.classList;
  if(!clsList.contains('dark-mode')) {
    document.documentElement.classList.add('dark-mode');
  }
}

const lightMode = () => {
  document.documentElement.classList.remove('dark-mode')
}

</script>

<template>
  <div class="text-gray-700 dark:text-gray-300 dark:bg-gray-900 w-full h-full">
    <button @click="lightMode" class="border-2 p-1 m-1">普通模式</button>
    <button @click="darkMode" class="border-2 p-1 m-1">暗黑模式</button>
    <div class="p-1">
      <h1 class="text-2xl">我是H1</h1>
      <h2 class="text-xl">我是H2</h2>
      <h3 class="text-lg">我是H3</h3>
      <h4 class="">我是H4</h4>
    </div>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
