<template>
  <div class="bg-blue-400 border-1 border-r-blue-400 size-10">其他参考元素</div>
  <div class="main-content">
    <!--
    <Tooltip content="asdasdasdasdasddasdasdasdasdasdasdasdasdasdasdasdasdasdasxsaasweasdas" position="right">
      <button>TEST TOOLTIP</button>
    </Tooltip>
    <div>hello</div>
    <div class="w-10"></div>
    -->
    <Dialog :visible="dialogVisible">
      <button @click="() => dialogVisible = false">关闭</button>
    </Dialog>
    <button @click="() => dialogVisible = true">打开</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from './components/dialog/Dialog.vue';
import Tooltip from './components/tooltip/Tooltip.vue';

const dialogVisible = ref(false);


</script>

<style lang="css">
.main-content {
  display: flex;
  justify-content: center;
  margin-top: 30em;
}
</style>
