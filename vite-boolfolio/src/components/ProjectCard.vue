<template>
    <div class="project-card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <router-link :to="{ name: 'project-show', params: { id: project.id } }">
            <button class="btn btn-primary">Visualizza Dettagli</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.project-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 8px;
}
</style>