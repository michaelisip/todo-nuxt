interface Task {
  id: Number,
  name: String
  status: TaskStatus
}

interface TaskStatus {
  done: Boolean
}

export const useTaskStore = defineStore('TaskStore', {
  state: () => {
    return {
      tasks: [],
    };
  },
  getters: {
    pendingTasks: (state) => state.tasks.filter((task: Task) => !task.status.done).length,
    doneTasks: (state) => state.tasks.filter((task: Task) => task.status.done).length,
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
      console.log(this.tasks)
    },
    setTaskSTatus(id: Number, status: Boolean) {
      console.log(id)
      console.log(status)
      this.tasks = this.tasks.map((task: Task) => { 
        if (task.id === id) task.status.done = status
        return task
      })
    },
    deleteTask(id: Number) {
      this.tasks = this.tasks.filter((task: Task) => task.id !== id)
                            .map((task: Task, index: number) => ({ ...task, id: index++ }))
    },
    deleteAll() {
      this.tasks = []
    },
    deleteDoneTasks() {
      this.tasks = this.tasks.filter((task: Task) => !task.status.done)
    }
  },
});
  
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}