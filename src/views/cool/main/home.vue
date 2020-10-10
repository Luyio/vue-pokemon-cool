<template>
  <div class="app-wrapper">
    <el-main>
      <el-row type="flex">
        <el-col class="col1">
          <el-scrollbar style="height: 100%;">
            <div style="height: 500px;width: 100%;background: red;" />
            <div style="height: 500px;width: 100%;background: yellowgreen;" />
            <div style="height: 500px;width: 100%;background: blueviolet;" />
          </el-scrollbar>
        </el-col>
        <el-col class="col2">
          2
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  padding: 0;
  width: 100%;
  height: 100%;
  .el-main,.el-row,.el-col {
    height: 100%;
  }
  .col1 {
    width: 160px;
    background-color: teal;
  }
  .col2 {
    background-color: rgb(218, 170, 162);
  }
}
</style>
