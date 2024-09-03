<script setup>
	const { status, data, signIn } = useAuth();
	definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
</script>

<template>
	<div>
		<h1>ログイン</h1>
		<button @click="signIn('github')" type="submit">Githubでログイン</button>
	</div>
</template>