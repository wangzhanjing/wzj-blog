<template>
  <ul class="wzz-navMenu">
    <li class="menuItem"
        :class="{active:activeIndex === i}"
        v-for="(item, i) in navListContent"
        :key="i"
        @click="tabNav(i,item.hash)">{{item.name}}</li>

  </ul>
</template>

<script>
export default {
  name: 'wzzNavMenu',
  data () {
    return {
      activeIndex: 0,
      // navListContent: ['首页', '分类', '留言', '关于', '个人介绍']
      navListContent: [
        {
          name: '首页',
          hash: '/'
        },
        {
          name: '分类',
          hash: '/sort'
        },
        {
          name: '留言',
          hash: '/guest'
        },
        {
          name: '关于',
          hash: '/about'
        },
        {
          name: '个人介绍',
          hash: '/introduction'
        }
      ]
    }
  },
  methods: {
    tabNav (i, hash) {
      this.activeIndex = i
      this.$router.push(hash)
    }
  }
}
</script>

<style lang="less" scoped>
.wzz-navMenu {
  min-width: 200px;
  height: 60px;
  display: flex;
  // background-color: red;
  .menuItem {
    width: 100px;
    line-height: 60px;
    text-align: center;
    margin: 0 10px;
    color: #fff;
    cursor: pointer;
  }
  .active {
    color: blue;
  }
}
</style>
