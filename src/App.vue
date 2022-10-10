<template>
  <el-container class="container">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main class="main">
        <Main />
        <div class="bottom"></div>
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
  background-color: #eee;
}

.header {
  padding: 0;
  margin: 0;
}

.bottom {
  height: 50px;
}
#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  --webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgb(220, 220, 220);
  --webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(220, 220, 220, 0.4);
}
</style>
