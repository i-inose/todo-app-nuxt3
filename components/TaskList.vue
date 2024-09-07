<script setup>
import { useTask } from "../composables/useTask"

const { tasks, removeTask } = useTask()
</script>

<template>
	<ul>
		<li v-for="(task, index) in tasks" :key="index">
			{{ task }}
			<button @click="removeTask(index)">削除</button>
		</li>
	</ul>
</template>