<template>
  <div class="sidebar">
    <el-menu
      mode="vertical"
      class="sidebar-el-menu"
      :default-active="active"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
    >
      <fragment class="menu-wrapper">
        <template v-for="item in routes">
          <fragment
            v-if="!item.hidden && item.children"
            :key="item.children[0].name"
          >
            <router-link
              v-if="
                hasOneShowingChildren(item.children) &&
                  !item.children[0].children &&
                  !item.alwaysShow
              "
              :to="item.path + '/' + item.children[0].path"
            >
              <el-menu-item
                :index="item.path + '/' + item.children[0].path"
                :class="{ 'submenu-title-noDropdown': !isNest }"
              >
                <svg-icon
                  v-if="item.children[0].meta && item.children[0].meta.icon"
                  :icon-class="item.children[0].meta.icon"
                />
                <span
                  v-if="item.children[0].meta && item.children[0].meta.title"
                  slot="title"
                >{{ item.children[0].meta.title }}</span>
              </el-menu-item>
            </router-link>

            <el-submenu v-else :key="item.name" :index="item.name || item.path">
              <template slot="title">
                <svg-icon
                  v-if="item.meta && item.meta.icon"
                  :icon-class="item.meta.icon"
                />
                <span v-if="item.meta && item.meta.title" slot="title">{{
                  item.meta.title
                }}</span>
              </template>

              <template v-for="child in item.children">
                <fragment v-if="!child.hidden" :key="child.path">
                  <sidebar-item
                    v-if="child.children && child.children.length > 0"
                    :is-nest="true"
                    class="nest-menu"
                    :routes="[child]"
                  />
                  <router-link
                    v-else
                    :key="child.name"
                    :to="item.path + '/' + child.path"
                  >
                    <el-menu-item :index="item.path + '/' + child.path">
                      <svg-icon
                        v-if="child.meta && child.meta.icon"
                        :icon-class="child.meta.icon"
                      />
                      <span
                        v-if="child.meta && child.meta.title"
                        slot="title"
                      >{{ child.meta.title }}</span>
                    </el-menu-item>
                  </router-link>
                </fragment>
              </template>
            </el-submenu>
          </fragment>
        </template>
      </fragment>
    </el-menu>
  </div>
</template>
<script>
import bus from './bus'
export default {
  props: {
    isNest: {
      type: Boolean,
      default: false
    },
    sidebar: {
      sidebar: JSON
    }
  },
  data() {
    return {
      collapse: false
    }
  },
  computed: {
    routes() {
      return this.$store.getters.routes.routes
    },
    active() {
      if (!this.$route.meta.parent) return this.$route.path
      const host = this.$route.path.substring(
        0,
        this.$route.path.lastIndexOf('/')
      )
      return host + '/' + this.$route.meta.parent
    }
  },
  created() {
    bus.$on('collapse', msg => {
      this.collapse = msg
      bus.$emit('collapse-content', msg)
    })
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped></style>
