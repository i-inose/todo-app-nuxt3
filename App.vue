<script>

</script>

<template>
    <NuxtPage />
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

h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 20px;
}

hr {
  border: 1px solid #444;
  margin-bottom: 20px;
}

.inner-container {
  background-color: #333333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  width: 350px;
}

input {
  width: calc(100% - 110px);
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

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #444;
}

li button {
  background-color: #80111c;
  border-radius: 5px;
  padding: 10px 20px;
}

li button:hover {
  background-color: #c82333;
}

</style>