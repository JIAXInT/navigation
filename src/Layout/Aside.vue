<template>
  <el-menu :default-active="index" class="menu">
    <el-menu-item
      :index="index"
      v-for="(item, index) in navigation"
      :key="index"
      @click="to(item)"
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
