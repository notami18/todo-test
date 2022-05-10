<template>
  <div>
    <TodoItem v-for="todo in completeds" :key="todo.id" :task="todo" />
    <TodoFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import TodoItem from "../../components/TodoItem.vue";
import TodoFooter from "../../components/TodoFooter.vue";
import { useStore } from "vuex";
const store = useStore();

const completeds = computed(() => store.getters["todos/completed"]);
</script>

<style lang="scss" scoped></style>
