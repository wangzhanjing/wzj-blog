<template>
  <div class="wzz-bannerItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wzzBannerItem',
  props: [],
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.wzz-bannerItem {
  width: 815px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
