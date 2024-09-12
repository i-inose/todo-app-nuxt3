<script setup>
// definePageMeta({
//   middleware: 'auth'
// })

const handleLogout = async () => {
  await useAuth().signOut();
  if (!useAuth().token.value) {
    navigateTo("/login");
  }
};

onMounted(async () => {
  await useAuth().checkAuthState();
});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-900 text-white">
    <div>
      <h1 class="animate-bounce text-4xl text-center font-bold text-white mb-5">
        ToDoリスト
      </h1>
      <hr class="border border-white mb-5" />
      <div class="bg-gray-700 p-7 rounded-lg shadow-lg w-80">
        <TaskInput @add-task="addTask" />
        <TaskList :tasks="tasks" @remove-task="removeTask" />
        <div class="flex justify-center mt-5">
          <button
            @click="handleLogout"
            class="px-5 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors duration-300"
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
