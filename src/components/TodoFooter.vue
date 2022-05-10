<template>
  <footer class="footer" v-show="todos.length" v-cloak>
    <span class="todo-count">
      <strong>{{ taskLeft }}</strong> Items Left
    </span>
    <ul class="filters">
      <li>
        <router-link to="/">All</router-link>
      </li>
      <li>
        <router-link to="/active">Active</router-link>
      </li>
      <li>
        <router-link to="/completed">Completed</router-link>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted">
      Clear completed
    </button>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useTodoList } from "../composables/useTodoList.js";
const store = useStore();
const taskLeft = computed(function () {
  return store.getters["todos/active"].length;
});

const removeCompleted = () => {
  store.commit("todos/clearCompleted");
};

const { todos } = useTodoList();
</script>

<style lang="scss" scoped></style>
