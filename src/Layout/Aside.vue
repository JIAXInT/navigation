<template>
  <el-menu
    default-active="2"
    class="menu"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      index="index"
      v-for="(item, index) in navigation"
      :key="index"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { reactive, ref } from "vue";
import navigation from "./../config/navigationConfig";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.menu {
  height: 100%;
}
</style>
