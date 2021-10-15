<template>
  <div id="about">{{ msg }}</div>
  <el-button class="btn1" type="primary" plain @click="menuClick">点击</el-button>
  <div class="div">{{ height }}</div>
</template>
<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      msg: {
        // 菜单数据
        type: String,
        required: true,
        default() {
          return '222';
        },
      },
    },
    setup(props, { emit }) {
      function menuClick() {
        height.value = '333px';
        // 通过自定义事件回传值
        emit('changeMsg', height);
      }
      let height = ref('33px');
      return { menuClick, height };
    },
  });
</script>
<style>
  .div {
    width: 100px;
    background: red;
    height: v-bind(height);
  }
</style>
