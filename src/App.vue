<script setup lang="ts">
import TodoNew from "./components/TodoNew.vue";
</script>

<template>
  <section class="todoapp">
    <TodoNew />
    <router-view/>
  </section>
</template>

<style>
@import "./assets/css/index.css";
</style>
