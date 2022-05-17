<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCounterStore } from "../stores/counter";
const router = useRouter();
const counter: any = useCounterStore();

const toBack = () => {
  router.push("/");
};
const addCounter = () => {
  counter.increment();
};
</script>

<template>
  <h1>我是helloworld</h1>
  <p>{{ counter.count }}</p>
  <button @click="toBack">回到首页</button>
  <button @click="addCounter">counter++</button>
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
