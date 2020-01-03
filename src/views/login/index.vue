<template>
  <div class="login-container">
    <el-form
      class="login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <h3 class="title animated pulse infinite">
        Welcome! &nbsp;Pokemon World
      </h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="icons8-pokemon" />
        </span>
        <el-input
          name="username"
          type="text"
          v-model="loginForm.username"
          autocomplete="on"
          placeholder="请输入帐号"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container svg-container_login">
          <svg-icon :class="rotate_pass" icon-class="Pokemon"></svg-icon>
        </span>
        <el-input
          name="password"
          :type="pwdType"
          @keyup.enter.native="handleLogin"
          v-model="loginForm.password"
          autocomplete="on"
          placeholder="请输入密码"
          @focus="start_pass()"
          @blur="end_pass()"
        ></el-input>
        <span @click="showPwd" class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login_btn"
          type="primary"
          style="width:100%;"
          :loading="loading"
          @click.native.prevent="handleLogin"
          >Go ~</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
// import axios from 'axios';
// import { setToken } from '@/utils/auth';
// import Vue from 'vue';

export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "皮卡丘",
        password: "111111"
      },
      loginRules: {},
      pwdType: "password",
      loading: false,
      rotate_pass: ""
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          localStorage.setItem("is_login", JSON.stringify(true));
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    start_pass() {
      this.rotate_pass = "rotate";
    },
    end_pass() {
      this.rotate_pass = "";
    }
  }
};
</script>

<style lang="scss">
$simple: #ee6b2e;
$deep: #e3350d;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: rgba(0, 0, 0, 0);
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: $deep;
    }

    // 覆盖自动填充 https://blog.csdn.net/yang1393214887/article/details/80318924
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      -webkit-text-fill-color: #ffffff !important; //字体颜色
      -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
      background-color: transparent;
      background-image: none;
      transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0);
    border-radius: 5px;
    color: #454545;
    .el-form-item__content {
      line-height: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
$simple: #ee6b2e;
$deep: #e3350d;
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgb(26, 22, 45);
  // background: url('../../assets/ball.png');
  background-size: "cover";
  background-repeat: "no-repeat";
  opacity: 0.85;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $simple;
    vertical-align: middle;
    width: 34px;
    display: inline-block;
    &_login {
      font-size: 18px;
      .rotate {
        animation: rotate 1s linear infinite;
      }
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $simple;
    margin: 0px auto 80px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 17px;
    font-size: 16px;
    color: $simple;
    cursor: pointer;
    user-select: none;
  }
  .login_btn {
    background-color: transparent;
    border-color: rgba(255, 81, 0, 0.25);
    color: rgba(255, 119, 0, 0.646);
    &.login_btn:hover {
      color: $simple;
    }
  }
}
</style>
