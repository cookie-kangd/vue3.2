<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const toHello = () => {
  router.push("/helloWorld");
};
</script>

<template>
  <h1>我是首页</h1>
  <button @click="toHello">点击跳转Helloword</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
