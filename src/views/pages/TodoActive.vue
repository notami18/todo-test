<template>
  <div>
    <TodoItem v-for="todo in actives" :key="todo.id" :task="todo" />
    <TodoFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import TodoItem from "../../components/TodoItem.vue";
import TodoFooter from "../../components/TodoFooter.vue";
import { useStore } from "vuex";
const store = useStore();

const actives = computed(() => store.getters["todos/active"]);
</script>

<style lang="scss" scoped></style>
