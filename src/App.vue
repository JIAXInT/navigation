<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import Header from "./Layout/Header.vue";
import Aside from "./Layout/Aside.vue";
import Main from "./Layout/Main.vue";
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.header {
  padding: 0;
  margin: 0;
}
</style>
