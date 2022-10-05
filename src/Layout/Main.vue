<template>
  <div class="main">
    <div v-for="(item, index) in navigation" :id="item.config" :key="index">
      <Module :card-config="item.config">{{ item.name }}</Module>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import navigation from "./../config/navigationConfig";
import Module from "../components/Module.vue";

import {
  Top,
  Document,
  Component,
  Animation,
  Design,
} from "./../config/cardConfig";
</script>

<style scoped>
.main {
  background-color: #fff;
  height: 100vh;
  overflow: scroll;
  margin-top: 60px;
  padding-top: 20px;
}
</style>
