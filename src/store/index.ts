import { createStore, createLogger } from 'vuex';

import { store as todos, TodosStore, State as TodosState } from '@/store/modules/todos';

export type RootState = {
    todos: TodosState;
};

export type Store = TodosStore<Pick<RootState, 'todos'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    modules: {
        todos,
    },
});

export function useStore(): Store {
    return store as Store;
}