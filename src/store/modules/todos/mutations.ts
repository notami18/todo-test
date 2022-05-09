import { MutationTree } from 'vuex';

import { TodoList } from '@/@types';

import { State } from './state';
import { TodosMutationTypes } from '../../mutation-types';

export type Mutations<S = State> = {
  [TodosMutationTypes.GET_DATA](state: S, payload: TodoList): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [TodosMutationTypes.GET_DATA](state: State, documents: TodoList) {
    state.data = documents;
  },
};