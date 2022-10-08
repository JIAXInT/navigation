<template>
  <el-menu
    :default-active="activeIndex"
    class="header"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="dialogVisible = true"
      >添加导航</el-menu-item
    >
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <el-dialog
    v-model="dialogVisible"
    title="添加导航"
    width="50%"
    :before-close="handleClose"
  >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const dialogVisible = ref(false);

const handleClose = (done) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
