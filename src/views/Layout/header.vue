<template>
  <div class="layout-header">
    <div class="warrper">
      <div class="logo">王占静的个人播客</div>
      <wzzNavMenu></wzzNavMenu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'layoutHeader',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 60px;
  margin-bottom: 13px;
  background-color: #363636;
  .warrper {
    display: flex;
    .logo {
      font-size: 30px;
      color: #fff;
      line-height: 60px;
    }
  }
}
</style>
