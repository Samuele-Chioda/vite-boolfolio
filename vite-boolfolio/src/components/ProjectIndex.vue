<template>
    <div>
        <h1>Project Index</h1>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: []
        };
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                this.projects = response.data;
            })
            .catch(error => {
                console.error('Errore durante il recupero dei progetti:', error);
            });
    }
}
</script>