<template>
    <div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <p><strong>Tipo:</strong> {{ project.type.name }}</p>
        <p><strong>Tecnologie:</strong> {{ project.technologies.join(', ') }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
        };
    },
    created() {
        const projectId = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/projects/${projectId}`)
            .then(response => {
                this.project = response.data;
            })
            .catch(error => {
                console.error('Errore durante il recupero del progetto:', error);
            });
    }
}
</script>