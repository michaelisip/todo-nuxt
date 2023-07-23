<script setup>
const taskStore = useTaskStore();
</script>

<template>
    <v-chip>
        Tasks
        <template v-slot:append>
            <v-badge color="error" :content="taskStore.tasks.length" inline></v-badge>
        </template>
    </v-chip>
    <v-chip>
        Tasks Done
        <template v-slot:append>
            <v-badge color="error" :content="taskStore.doneTasks" inline></v-badge>
        </template>
    </v-chip>
    <v-btn prepend-icon="mdi-trash-can" color="red-darken-3" size="small" @click="taskStore.deleteDoneTasks()">
        Tasks Done
    </v-btn>
    <v-btn prepend-icon="mdi-trash-can" color="red-darken-3" size="small" @click="taskStore.deleteAll()" >
        Tasks
    </v-btn>
</template>