<script setup>
import { ref } from "vue"
import TaskInput from "../components/TaskInput.vue"
import TaskList from "../components/TaskList.vue"
import { useTask } from "../composables/useTask"

const { tasks } = useTask()
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