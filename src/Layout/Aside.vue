<template>
  <el-menu class="menu" :default-active="active">
    <el-menu-item
      :index="item.id"
      v-for="item in navigation"
      :key="item.id"
      @click="to(item)"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";
import navigation from "./../config/navigationConfig";

const to = (item) => {
  var anchor = document.getElementById(item.config);

  // chrome
  document.body.scrollTop = anchor.offsetTop - 90;
  // firefox
  document.documentElement.scrollTop = anchor.offsetTop - 90;
  // safari
  window.pageYOffset = anchor.offsetTop - 90;
};

onMounted(() => {
  // 监听滚动事件
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
  window.removeEventListener("scroll", onScroll);
});

let active = ref(0);

const onScroll = (navigation) => {
  // 获取所有锚点元素
  const navContents = [];

  let nav = Array.from(navigation);

  nav.forEach((item) => {
    console.log(item);
    let anchor = document.getElementById(item.config);
    navContents.push(anchor);
  });

  // 所有锚点元素的 offsetTop
  const offsetTopArr = [];
  navContents.forEach((item) => {
    offsetTopArr.push(item.offsetTop);
  });
  // 获取当前文档流的 scrollTop
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  // 定义当前点亮的导航下标
  let navIndex = 0;
  for (let n = 0; n < offsetTopArr.length; n++) {
    // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    // 那么此时导航索引就应该是 n 了
    if (scrollTop >= offsetTopArr[n]) {
      navIndex = n;
    }
  }
  // 把下标赋值给 vue 的 data
  active.value = navIndex;
};
</script>

<style scoped>
.menu {
  position: fixed;
  margin-top: 60px;
  width: 200px;
  height: 100vh;
}

.is-active {
  color: #e2e2e2;
  background-color: #2d76be;
}
</style>
