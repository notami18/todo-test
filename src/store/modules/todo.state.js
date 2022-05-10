import { v4 as uuidv4 } from "uuid";
import service from "../../services";
import * as mutationTypes from "../mutation-types";

// initial state
const state = () => ({
  all: [],
});

const getters = {
  active(state) {
    return state.all.filter((task) => task.completed === false);
  },
  completed(state) {
    return state.all.filter((task) => task.completed === true);
  },
};

const actions = {
  async setTodo({ commit }, title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    const { data } = await service.post(newTodo);
    commit(mutationTypes.SET_TODO_MUTATION, data);
  },

  async getTodo({ commit }) {
    const { data } = await service.get();

    commit(mutationTypes.GET_TODOS, data);
  },
};

const mutations = {
  [mutationTypes.SET_TODO_MUTATION](state, data) {
    state.all.push(data);
  },

  [mutationTypes.GET_TODOS](state, data) {
    state.all = data;
  },

  async toggleStatus(state, taskId) {
    const selectedTask = state.all.find((task) => task.id === taskId);
    await service.put(selectedTask, taskId);
    selectedTask.completed = !selectedTask.completed;
  },

  async delete(state, taskId) {
    await service.remove(taskId);
    state.all = state.all.filter((task) => task.id !== taskId);
  },

  clearCompleted(state) {
    state.all = state.all.filter((task) => task.completed === false);
  },
};

export const todos = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
