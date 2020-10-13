<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      中间页
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: 'Dashboard',
  computed: {
    // ...mapGetters(["name", "roles"])
  },
  created() {
    switch (this.$store.getters.module_name) {
      case 'cool': // 是该项目页面的话重定向到改项目
        this.$router.push({
          path: `/${this.$store.getters.app_id}/cool/main/home`
        })
        break
      default:
        break
    }
  }
}
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
