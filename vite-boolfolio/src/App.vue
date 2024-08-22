<template>
  <div id="app">
    <h1>Progetti</h1>
    <div>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from './components/ProjectCard.vue';
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
        console.log(this.projects);
      })
      .catch(error => {
        console.error('Errore durante il recupero dei progetti:', error);
      });
  }
}
</script>

<style>
</style>
