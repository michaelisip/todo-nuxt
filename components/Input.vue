<script setup>
const name = ref('')
const taskStore = useTaskStore();

const addNewTask = () => {
  if (name.value === '') {
    alert('Enter task name')
    return
  }

  let newTask = {
    id: taskStore.tasks.length,
    name: name.value,
    status: {
      done: false
    }
  }
  
  name.value = ''
  taskStore.addTask(newTask)
}
</script>

<template>
    <v-text-field placeholder="Task name" clearable density="compact" v-model="name">
        <template v-slot:append-inner>
            <v-btn icon="mdi-plus-circle" color="blue-darken-3" @click="addNewTask()"></v-btn>
        </template>
    </v-text-field>
</template>