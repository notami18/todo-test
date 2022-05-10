<template>
  <div>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <li

        class="todo"
        :class="{ completed: task.completed, editing: task == editedTodo }"
      >
        <div class="view">
          <input class="toggle" v-model="checkboxModel" type="checkbox"/>
          <label @dblclick="editTodo(task)">{{ task.title }}</label>
          <button class="destroy" @click="removeTodo"></button>
        </div>
        <input
          class="edit"
          type="text"
          v-model="task.title"
          @blur="doneEdit(task)"
          @keyup.enter="doneEdit(task)"
          @keyup.esc="cancelEdit(task)"
        />
      </li>
      <button type="" @click="task.id"></button>
    </ul>
  </div>
</template>

<script setup>
import { ref, toRefs, computed, defineProps } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const { task } = toRefs(props);
const editedTodo = ref(null);
const store = useStore();
const checkboxModel = computed({
  get() {
    return props.task.completed;
  },
  set(value) {
    store.commit("todos/toggleStatus", props.task.id);
  },
});

const removeTodo = () => {
  store.commit("todos/delete", props.task.id);
};

const doneEdit = (e) => {
  console.log(e);
};

const cancelEdit = (e) => {
  console.log(e);
};

const editTodo = (e) => {
  console.log(e);
};

const gio = (ui) => {
  console.log(task.id);
  console.log(ui.ui);
};
</script>

<style lang="scss" scoped></style>
