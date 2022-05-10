<template>
  <div>
    <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
    <TodoFooter />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import TodoItem from "../../components/TodoItem.vue";
import TodoFooter from "../../components/TodoFooter.vue";
import { useTodoList } from "../../composables/useTodoList";
import { useStore } from "vuex";

const store = useStore();

// onMounted(async () => await store.dispatch("todos/getTodo"));
const { setFilter, todos, filter } = useTodoList();
</script>

<style scoped></style>
