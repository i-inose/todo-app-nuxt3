<script setup>
import { useTask } from "../composables/useTask"

const { newTask, addTask } = useTask()
</script>

<template>
	<div>
		<input v-model="newTask" placeholder="タスクを入力してください"/>
		<button @click="addTask">追加</button>
	</div>
</template>