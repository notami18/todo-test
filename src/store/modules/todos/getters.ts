import { GetterTree } from 'vuex';

import { RootState } from '@/store';

import { TodoList } from '@/@types';

import { State } from './state';

export type Getters = {
  getTodosList(state: State): TodoList | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  getTodosList: (state) => state.data,
};