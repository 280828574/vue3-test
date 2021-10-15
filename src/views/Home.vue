<template>
  <p>{{ x }} {{ y }}</p>
  <el-button @click="change">更改</el-button>
  <div>about</div>
  <about @changeMsg="changeMsg" msg="333"></about>
</template>

<script>
  import api from '@/api';
  import about from './About';
  import { ref, toRef, toRefs, reactive, onMounted } from 'vue';
  export default {
    components: { about },
    setup() {
      //可以在不失去响应性的情况下破坏结构
      let a = {
        x: 1,
        y: 1,
        change: () => {
          state.x++;
          state.y++;
        },
        changeMsg: val => {
          console.log('val2 :>> ', val);
        },
      };

      onMounted(() => {
        api.user.fetchUsers().then(res => {
          console.log('res2222 :>> ', res);
        });
      });
      const state = reactive(a);
      return toRefs(state);
    },
  };
</script>
