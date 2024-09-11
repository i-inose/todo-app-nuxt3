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
  <div>
    <h1>ログイン</h1>
		<hr />
		<div class="login_detail">
      <button @click="handleLogin">Googleでログイン</button>
		</div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #2c2c2c;
  color: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

input {
  width: calc(80%);
  padding: 10px;
  border: 1px solid #666;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #ffffff;
  color: #050505;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #777;
}

.login_detail button {
  background-color: rgba(41, 41, 255, 0.845);
}

.login_detail button:hover {
  background-color: #777;
}
</style>