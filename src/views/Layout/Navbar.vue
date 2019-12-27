<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <span class="svg-Navbar ">
        <svg-icon icon-class="pokemonball" />
      </span>
    </div>
    <div class="logo">侯斐 is my sun</div>
    <div class="header_R">
      <div class="header_user">
        <!-- 全屏 -->
        <div class="btn-screen"></div>
        <!-- 消息 -->
        <div class="btn-news"></div>
        <!-- 头像 -->
        <div class="user-avator"></div>
        <!-- 用户名 -->
        <div class="user-name"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    collapseChange() {}
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header .svg-Navbar {
  color: goldenrod;
}
.header_R {
  float: right;
  padding-right: 50px;
  background-color: #ccc;
}
</style>
