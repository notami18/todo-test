<script setup lang="ts">
import TodoNew from "./components/TodoNew.vue";
</script>

<template>
  <section class="todoapp">
    <TodoNew />
    <section class="main">
        <router-view/>
    </section>
  
  </section>
</template>

<style>
@import "./assets/css/index.css";
</style>
