<template>
  <div class="common-layout">
    <el-container>
      <el-header>
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
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Header from "./Layout/Header.vue";
import Aside from "./Layout/Aside.vue";
import Main from "./Layout/Main.vue";
</script>

<style scoped>
.common-layout {
  background-color: #eeeeee;
}
</style>
