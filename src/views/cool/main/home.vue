<template>
  <div class="app-wrapper">
    <el-main>
      <el-row type="flex">
        <el-col class="col1">
          <el-scrollbar style="height: 100%;">
            <li v-for="(item,index) in new Array(16)" :key="index" class="item" @click="active = index">
              <div class="avatar">
                <div class="bg" :class="{'active' : active == index}" />
                <img class="circle" src="~assets/logo.png" alt="">
              </div>
            </li>
          </el-scrollbar>
        </el-col>
        <el-col class="col2">
          <el-card v-for="(item,index) in new Array(16)" v-if="active == index" :key="index" shadow="always">
            <img src="~assets/avatar/小智.png" alt="">
            <div>
              <span>小智</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      active: 0
    }
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
    width: 240px;
  }
  .col2 {
    background-color: rgb(218, 170, 162);
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px auto;
    margin-bottom: 70px;
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .bg {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        &.active {
          animation: pulse 5s infinite;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 8px 6px #fff;
        }
        50% {
            box-shadow: 0 0 8px 6px #ff6633;
        }
        100% {
            box-shadow: 0 0 8px 6px #fff;
        }
    }
    .circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #efefef;
    }
  }
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
