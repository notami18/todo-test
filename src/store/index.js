import { createStore, createLogger } from "vuex";
import { todos } from "./modules/todo.state";

const debug = process.env.NODE_ENV !== "production";

const plugins = [
]

export default createStore({
  modules: {
    todos,
  },
  plugins: debug !== "production"
    ? [...plugins, createLogger()]
    : plugins
});
