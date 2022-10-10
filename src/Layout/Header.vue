<template>
  <el-menu
    :default-active="activeIndex"
    class="header"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-image style="height: 60px" src="/public/logo.png" :fit="fit" />
    </el-menu-item>
    <p class="info">专为开发者提供的免费、绿色、开源的开发者导航</p>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="dialogVisible = true"
      >添加导航</el-menu-item
    >
    <el-sub-menu index="2">
      <template #title>关于</template>
      <el-menu-item index="2-1">关于本站</el-menu-item>
      <el-menu-item index="2-2" @click="toGitee"
        >Gitee <el-icon><Link /></el-icon
      ></el-menu-item>
      <el-menu-item index="2-3" @click="toGithub"
        >Github <el-icon><Link /></el-icon
      ></el-menu-item>
    </el-sub-menu>
  </el-menu>

  <el-dialog v-model="dialogVisible" title="添加导航" width="50%">
    功能暂未上线，敬请期待！
    <!-- <Add /> -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">返回</el-button>
        <!-- <el-button type="primary" @click="addNewCard">添加</el-button> -->
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const dialogVisible = ref(false);

const toGitee = () => {
  window.open("https://gitee.com/JIAXInT/navigation");
};

const toGithub = () => {
  window.open("https://github.com/JIAXInT/navigation");
};

const addNewCard = () => {};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.flex-grow div {
  float: left;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.info {
  font-size: 12px;
  color: #aaaaaa;
  margin-top: 35px;
  margin-bottom: 0;
}
</style>
