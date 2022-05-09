import { ActionTree, ActionContext } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';

import { State } from './state';
import { Mutations } from './mutations';
import { TodosMutationTypes } from './../../mutation-types';
import { TodosActionTypes } from './../../action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [TodosActionTypes.GET_TODOS](
    { commit }: AugmentedActionContext,
    someId: string, // Obsolete in here but left as an example
  ): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [TodosActionTypes.GET_TODOS]({ commit }, someId: string) {
    return new Promise(() => {
      setTimeout(() => {
        console.debug('GET_TODOS', someId);
        const data = {
            todos: {},
        };
        commit(TodosMutationTypes.GET_DATA, data);
        return true;
      }, 500);
    });
  },
};
