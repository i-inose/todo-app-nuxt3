<script setup lang="ts">
import { useAuth } from '~/composables/useTask';

const handleLogin = async () => {
  await useAuth().signInWithGoogle();
  if (useAuth().token.value) {
    navigateTo('/');
  }
}
</script>

<template>
  <div class="bg-gray-900 flex flex-col items-center justify-center h-screen text-white">
    <h1 class="animate-bounce text-4xl font-bold mb-4">ログイン</h1>
    <hr class="w-full border-white mb-4" />
    <button @click="handleLogin" class="px-6 py-3 bg-blue-600 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300">
      Googleでログイン
    </button>
  </div>
</template>
