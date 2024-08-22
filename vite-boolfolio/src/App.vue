<template>
  <div id="app">
    <h1>Progetti</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
