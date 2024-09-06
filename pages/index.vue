<script setup>
import { ref } from "vue"
import TaskInput from "../components/TaskInput.vue"
import TaskList from "../components/TaskList.vue"

const tasks = ref([])

const loadTasks = () => {
  const savedTasks = localStorage.getItem("tasks")
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
}

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value))
}

onMounted(() => {
  loadTasks()
})

const addTask = (task) => {
  tasks.value.push(task)
  saveTasks()
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <div>
    <h1>ToDoリスト</h1>
    <hr />
    <div class="inner-container">
      <TaskInput @add-task="addTask" />
      <TaskList :tasks="tasks" @remove-task="removeTask" />
    </div>
  </div>
</template>