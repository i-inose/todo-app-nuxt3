<script setup>
import { useTask } from "../composables/useTask"

const { tasks, removeTask } = useTask()
</script>

<template>
  <div class="flex flex-col items-center p-6">
    <ul class="w-full max-w-xl space-y-2">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex items-center p-3 border border-gray-300 rounded-md"
      >
        <span class="flex-grow text-white">{{ task.content }}</span>
        <button
          @click="removeTask(task.id)"
          class="ml-4 bg-red-700 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          削除
        </button>
      </li>
    </ul>
  </div>
</template>
