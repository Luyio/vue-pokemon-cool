<template>
  <div class="app-wrapper">
    <el-main>
      <el-row type="flex">
        <el-col class="col1">
          <el-scrollbar style="height: 100%;">
            <li v-for="item in new Array(16)" :key="item">
              <div class="avatar">
                <img src="../../../assets/logo.png" alt="">
              </div>
            </li>
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
    padding-top: 40px;
    width: 240px;
  }
  .col2 {
    background-color: rgb(218, 170, 162);
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0px auto;
    margin-bottom: 80px;
    background-color: green;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
