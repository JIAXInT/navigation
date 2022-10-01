<template>
  <div class="main">
    <Module :card-config="Top">置顶</Module>

    <Module>文档</Module>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Module from "../components/Module.vue";

import { Top } from "./../config/cardConfig";
</script>

<style scoped>
.main {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
</style>
