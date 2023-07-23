<script setup>
const taskStore = useTaskStore();
</script>

<template>
  <v-list-item
    v-for="(task, i) in taskStore.tasks"
    :key="i"
    :value="task"
    color="primary"
  >
    <template v-slot:prepend>
      <v-btn
        density="compact"
        icon="mdi-check-bold"
        :color="task.status.done ? 'green-darken-2' : 'grey-darken-2'"
        @click="taskStore.setTaskSTatus(task.id, !task.status.done)"
        class="mr-5"
      ></v-btn>
    </template>

    <v-list-item-title v-text="task.name" :class="task.status.done ? 'text-decoration-line-through' : ''"></v-list-item-title>

    <template v-slot:append>
      <v-btn @click="taskStore.deleteTask(task.id)" variant="plain" icon="mdi-trash-can" color="red-darken-3"></v-btn>
    </template>
  </v-list-item>
</template>