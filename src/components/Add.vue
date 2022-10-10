<template>
  <el-row>
    <el-col :span="12">
      <div>
        <p>网站地址</p>
        <el-input
          v-model="newNav.url"
          placeholder="https://"
          size="normal"
          clearable
          style="width: 90%"
        >
          <template #append>
            <el-button>获取图标</el-button>
          </template></el-input
        >
        <p>网站名称</p>
        <el-input
          v-model="newNav.title"
          placeholder="请输入网站名称"
          size="normal"
          clearable
          style="width: 90%"
        ></el-input>
        <p>网站介绍</p>
        <el-input
          v-model="newNav.info"
          :rows="4"
          type="textarea"
          placeholder="请输入网站介绍"
          style="width: 90%"
        />
      </div>
    </el-col>
    <el-col :span="12">
      <div>
        <p>网站图标</p>
        <el-image
          style="width: 100px; height: 100px"
          :src="
            newNav.ico
              ? newNav.ico
              : 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
          "
          :fit="fit"
        >
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div> </template
        ></el-image>
        <el-input
          class="url"
          v-model="newNav.ico"
          :rows="1"
          type="textarea"
          placeholder="输入图标url"
          style="width: 90%"
        />
        <p>网站分组</p>
        <el-select
          v-model="select"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in navigation"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
    </el-col>
  </el-row>
  <div class="dialog-footer">
    <el-button type="primary" @click="addNewCard">添加</el-button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Top } from "./../config/cardConfig";
import navigation from "./../config/navigationConfig";

const newNav = reactive({
  url: "",
  title: "",
  info: "",
  ico: "",
});

const select = ref("");

const addNewCard = () => {
  Top.push(newNav);
};
</script>

<style scoped>
p {
  margin: 5px;
}
.dialog-footer button {
  margin-top: 20px;
}
</style>
