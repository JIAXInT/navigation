<template>
  <el-menu class="menu">
    <el-menu-item
      :index="item.name"
      v-for="item in navigation"
      :key="item.name"
      @click="to(item)"
    >
      <el-icon><component :is="item.icon"></component></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { reactive, ref } from "vue";
import navigation from "./../config/navigationConfig";

const to = (item) => {
  window.location.href = `#${item.config}`;
};
</script>

<style scoped>
.menu {
  position: fixed;
  margin-top: 60px;
  width: 200px;
  height: 100vh;
}
</style>
