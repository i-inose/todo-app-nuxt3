<script setup>
import { ref } from "vue"

const emit = defineEmits(["add-task"])
const newTask = ref("")

const emitAddTask = () => {
  if (newTask.value.trim()) {
    emit('add-task', newTask.value.trim())
    newTask.value = ""
  }
}
</script>

<template>
	<div>
		<input v-model="newTask" placeholder="タスクを入力してください"/>
		<button @click="emitAddTask">追加</button>
	</div>
</template>