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
  width: 100vw;
  background-color: #eee;
}

.header {
  padding: 0;
  margin: 0;
}

#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}

::-webkit-scrollbar {
  width: 4px;
  height: 6px;
}

::-webkit-scrollbar-corner {
  display: block;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
