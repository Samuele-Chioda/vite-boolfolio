<template>
    <div class="card">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
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
.card {
    border: 1px solid #ddd;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: black;
}

h2 {
    margin: 0 0 8px;
}
</style>