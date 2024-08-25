import { createRouter, createWebHistory } from 'vue-router';
import ProjectIndex from '../components/ProjectIndex.vue';
import ProjectShow from '../components/ProjectShow.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProjectIndex,
    },
    {
        path: '/projects/:id',
        name: 'project-show',
        component: ProjectShow,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
