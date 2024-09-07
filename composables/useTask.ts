const tasks = ref<string[]>([])

export const useTask = () => {
	const newTask = useState<string>("newTask", () => "");

	// 追加処理
	const addTask = () => {
		if (newTask.value.trim()) {
			tasks.value.push(newTask.value.trim());
			newTask.value = "";
		}
	}
	// 削除処理
	const removeTask = (index: number) => {
	tasks.value.splice(index, 1)
	}

	

	return { newTask, tasks, addTask, removeTask };
};