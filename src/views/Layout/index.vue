<template>
  <div class="wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./Navbar";
import sidebar from "./Sidebar";
import bus from "./bus";

export default {
  name: "layout",
  components: { navbar, sidebar },
  created() {
    bus.$on("collapse-content", msg => {
      this.collapse = msg;
    });
  },
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
