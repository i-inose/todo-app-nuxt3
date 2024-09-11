<script setup>
import { useTask } from "../composables/useTask"

const { tasks, removeTask } = useTask()
</script>

<template>
	<ul>
		<li v-for="(task, index) in tasks" :key="index">
			{{ task.content }}
			<button @click="removeTask(task.id)">削除</button>
		</li>
	</ul>
</template>