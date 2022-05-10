<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="Add New Todo"
      v-model="inputModel"
      @keyup.enter="onAdd"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useStore } from "vuex";

const store = useStore();
const inputModel = ref("");

const onAdd = async (e: any) => {
  console.log("add");

  console.log(inputModel.value);
  await store.dispatch("todos/setTodo", inputModel.value);
  
  inputModel.value = "";
  e.target.blur();
};
</script>

<style scoped></style>
