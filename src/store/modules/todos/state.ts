import { TodoList } from "@/@types";

export type State = {
    data: TodoList | null,
}

export const state: State = {
    data: null,
}