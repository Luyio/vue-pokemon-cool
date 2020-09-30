<template>
  <div class="header">
    <div @click="collapseChage()" class="collapse-btn">
      <span class="'svg-Navbar' ">
        <svg-icon
          icon-class="pokemonball"
          :class="[collapse ? 'svg-Navbar' : 'svg-Navbar svg_active']"
        />
      </span>
    </div>
    <div class="logo">口袋图鉴</div>
    <div class="header_R">
      <div class="header_user">
        <!-- 全屏 -->
        <div class="btn-screen" @click="collapseChange">
          <el-tooltip
            effect="dark"
            :content="fullscreen ? `取消全屏` : `全屏`"
            placement="bottom"
          >
            <span class="svg-Navbar">
              <svg-icon v-if="!fullscreen" icon-class="screen"></svg-icon>
              <svg-icon
                v-if="fullscreen"
                icon-class="exit-fullscreen"
              ></svg-icon>
            </span>
          </el-tooltip>
        </div>
        <!-- 消息 -->
        <div class="btn-news">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <span class="svg-Navbar">
              <svg-icon icon-class="icons8-pokemon"></svg-icon>
            </span>
          </el-tooltip>
          <span class="has_news" v-if="message"></span>
        </div>
        <!-- 头像 -->
        <div class="user-avator">
          <img src="../../assets/timg.jpeg" />
        </div>
        <!-- 用户名 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ name }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><a
                href="https://github.com/Luyio/vue-pokemon-cool"
                target="_blank"
                >github</a
              ></el-dropdown-item
            >
            <el-dropdown-item><a href="https://www.baidu.com/" target="_blank">帮助</a></el-dropdown-item>
            <el-dropdown-item divided command="loginout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "./bus";
export default {
  components: {},
  data() {
    return {
      collapse: false,
      fullscreen: false,
      message: 999,
      name: 'PPy'
    };
  },
  methods: {
    collapseChange() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    // 下拉菜单
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.setItem("is_login", JSON.stringify(false));
        this.$store.dispatch("LogOut").then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    }
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
  position: relative;
  color: goldenrod;
  transition: 0.3s;
}
.svg_active {
  transform: rotate(90deg);
  color: goldenrod;
}
.header_R {
  float: right;
  padding-right: 50px;
}
.header_user {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-screen {
  margin-right: 5px;
  font-size: 20px;
}
.btn-news,
.btn-screen {
  position: relative;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.has_news {
  position: absolute;
  right: 0;
  top: 1px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
