import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, size: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "counter",
        storage: localStorage,
        paths: [], //可以选择保存的字段  其余的不保存
      },
    ],
  },
});
