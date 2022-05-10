import { createWebHistory, createRouter } from "vue-router";
import TodoList from "../views/pages/TodoList.vue";
import TodoActive from "../views/pages/TodoActive.vue";
import TodoComplete from "../views/pages/TodoComplete.vue";

const routes = [
    {
        path: "/",
        name: "Todos",
        component: TodoList,
    },
    {
        path: "/active",
        name: "Active",
        component: TodoActive,
    },
    {
        path: "/complete",
        name: "Complete",
        component: TodoComplete,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;