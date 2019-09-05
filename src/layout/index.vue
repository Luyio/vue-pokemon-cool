<template>
  <div class="app-wrapper">
    <div class="left-menu-wrapper">
      <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
      <sidebarHead class="menu-head-box"></sidebarHead>
      <sidebar class="sidebar-container sidebar-container-limit"></sidebar>
      <preview class="menu-bottom-sub-btnbox"></preview>
      <submit2wx class="menu-bottom-btnbox"></submit2wx>-->
    </div>
    <div class="main-container">
      <!-- <navbar></navbar>
      <app-main></app-main>-->
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
// @import 'src/styles/mixin.scss';
.app-wrapper {
  // @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.app-wrapper .left-menu-wrapper {
  width: 180px;
  height: 100%;
  overflow: hidden;
  position: fixed;
  transition: width 0.28s;
  z-index: 3;
}
.app-wrapper.hideSidebar .left-menu-wrapper {
  width: 36px !important;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.sidebar-container {
  margin-top: 60px;
}
.sidebar-container-limit {
  max-height: calc(100% - 220px);
}
.menu-head-box {
  box-sizing: border-box;
  border-bottom: 1px solid #1f2d3d;
  position: absolute;
  top: 0;
  height: 60px;
  width: 180px;
  background-color: rgb(48, 65, 86);
  z-index: 999;
}
.menu-bottom-btnbox {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 180px;
  background-color: rgb(48, 65, 86);
  z-index: 999;
}
.menu-bottom-sub-btnbox {
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  bottom: 100px;
  height: 60px;
  padding-top: 20px;
  width: 180px;
  background-color: rgb(48, 65, 86);
  z-index: 999;
}
</style>