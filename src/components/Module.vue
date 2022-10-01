<template>
  <el-divider class="divider" content-position="left" border-style="dashed">
    <slot></slot>
  </el-divider>
  <el-row>
    <el-col :span="6" v-for="item in cardConfig" :key="item.title">
      <Card :item="item" @click="go(item)" />
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from "vue";
import Card from "./Card.vue";

defineProps({
  cardConfig: {
    type: Array,
  },
});

const go = (item) => {
  window.location.href = item.url;
};
</script>

<style scoped>
:deep(.el-divider__text.is-left) {
  font-size: 25px;
  font-weight: 600;
}
</style>
