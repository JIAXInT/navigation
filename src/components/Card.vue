<template>
  <div class="card">
    <el-card shadow="always">
      <template #header>
        <div class="avatar">
          <el-avatar
            shape="square"
            size="large"
            :src="item.url + '/favicon.ico'"
          />
        </div>
        <div class="title">
          <div class="hidden1">{{ item.title }}</div>
          <p class="hidden2">{{ item.info }}</p>
        </div>
      </template>
      <span class="date">添加时间：2000/3/20</span>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

defineProps({
  item: {
    type: Array,
  },
});
</script>

<style scoped>
.card {
  position: relative;
  margin: 10px;
  cursor: pointer;
}
.avatar {
  display: inline-block;
}
:deep(.el-avatar) {
  background-color: rgba(0, 0, 0, 0);
}
.title {
  position: absolute;
  display: inline-block;
  top: 5px;
  padding: 10px;
}
.title div {
  font-size: 20px;
  font-weight: 700;
}

.title p {
  width: 200px;
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: #999;
}

:deep(.el-card__body) {
  padding: 10px;
}

.date {
  font-size: small;
  color: #999;
}
.hidden1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-height: 1em;
}

.hidden2 {
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  min-height: 2em;
}
</style>
