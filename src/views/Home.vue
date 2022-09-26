<template>
  <div class="Home">
    <layoutHeader></layoutHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import layoutHeader from '@/views/Layout/header'
export default {
  name: 'Home',
  components: {
    layoutHeader
  }
}
</script>

<style lang="less" scoped>
.Home {
}
</style>
