<script setup>
const taskStore = useTaskStore();
</script>

<template>
  <v-card id="tasks-card">
    <template v-slot:title>
      <Header></Header>
    </template>

    <v-card-text id="card-body">
      <v-list density="compact" v-if="taskStore.tasks.length > 0">
        <Task></Task>
      </v-list>
      <span v-else class="mt-2">No tasks...</span>
    </v-card-text>

    <template v-slot:actions>
      <Input></Input>
    </template>
  </v-card>
</template>