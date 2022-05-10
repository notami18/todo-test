<template>
  <section class="main">
    <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import TodoItem from "../../components/TodoItem.vue";
import { useTodoList } from "../../composables/useTodoList";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => await store.dispatch("todos/getTodo"));
const { setFilter, todos, filter } = useTodoList();
</script>

<style scoped></style>
