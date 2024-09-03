<script setup>
const props = defineProps({
	tasks: Array
})
const emit = defineEmits(["remove-task"])
const emitRemoveTask = (index) => {
	emit("remove-task", index)
}
</script>

<template>
	<ul>
		<li v-for="(task, index) in tasks" :key="index">
			{{ task }}
			<button @click="emitRemoveTask(index)">削除</button>
		</li>
	</ul>
</template>