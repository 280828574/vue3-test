<template>
  <p>{{ x }} {{ y }}</p>
  <button @click="change">更改</button>
</template>

<script>
  import { ref, toRef, toRefs, reactive } from 'vue';
  export default {
    setup() {
      //可以在不失去响应性的情况下破坏结构
      let a = {
        x: 1,
        y: 1,
        change: () => {
          state.x++;
          state.y++;
        },
      };
      const state = reactive(a);
      return toRefs(state);
    },
  };
</script>
