<template>
  <div class="dashboard-container">
    <div class="dashboard-text">hhh</div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  computed: {
    // ...mapGetters(["name", "roles"])
  },
  created() {
    // console.log(this.$store.getters.module_name); 拿到该后台的模板名称
    switch (this.$store.getters.module_name) {
      case "cool": // 是该项目页面的话重定向到改项目
        this.$router.push({
          path: "/app_id/cool/main"
        });
        break;
      default:
        break;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
