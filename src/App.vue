<template>
  <div class="main-content">
    <Tooltip content="asdasdasdasdasddasdasdasdasdasdasdasdasdasdasdasdasdasdasxsaasweasdas" position="right">
      <button>TEST TOOLTIP</button>
    </Tooltip>
    <div>hello</div>
    <div class="w-10"></div>
  </div>
</template>

<script setup lang="ts">
import Tooltip from './components/tooltip/Tooltip.vue';


</script>

<style lang="css">
.main-content {
  display: flex;
  justify-content: center;
  margin-top: 30em;
}
</style>
