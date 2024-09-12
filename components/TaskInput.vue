<script setup>
import { useTask } from "../composables/useTask"

const { newTask, addTask } = useTask()
</script>

<template>
  <div class="flex items-center">
    <input
      v-model="newTask"
      placeholder="タスクを入力"
      class="w-3/4 px-4 py-2 border border-gray-600 rounded-md mr-4 text-base bg-white text-gray-900"
    />
    <button
      @click="addTask"
      class="px-5 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors duration-300 min-w-[80px] text-center"
    >
      追加
    </button>
  </div>
</template>
