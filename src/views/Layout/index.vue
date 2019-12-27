<template>
  <div class="wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>
<script>
import navbar from "./Navbar";
import sidebar from "./Sidebar";

export default {
  name: "layout",
  components: { navbar, sidebar },

  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
