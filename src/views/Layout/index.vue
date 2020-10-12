<template>
  <div class="wrapper">
    <navbar />
    <sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <transition name="move" mode="out-in">
          <!-- <keep-alive :include="tagsList"> -->
          <router-view />
          <!-- </keep-alive> -->
        </transition>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script>
import navbar from './Navbar'
import sidebar from './Sidebar'
import bus from './bus'

export default {
  name: 'Layout',
  components: { navbar, sidebar },
  data() {
    return {
      tagsList: [],
      collapse: false
    }
  },
  created() {
    bus.$on('collapse-content', msg => {
      this.collapse = msg
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
// .content {
//   background-color: #000;
// }
</style>
