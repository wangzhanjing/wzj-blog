<template>
  <div class="Index-page">
    <div class="warrper">
      <div class="left">
        <wzzBanner class="banner">
          <wzzBannerItem :auto="false">
            <img src="../../assets/img/banner.jpg"
                 alt="">
          </wzzBannerItem>
          <wzzBannerItem>
            <img src="../../assets/img/banner2.jpg"
                 alt="">
          </wzzBannerItem>
          <wzzBannerItem>
            <img src="../../assets/img/banner3.jpg"
                 alt="">
          </wzzBannerItem>
          <wzzBannerItem>
            <img src="../../assets/img/banner4.jpg"
                 alt="">
          </wzzBannerItem>
        </wzzBanner>
        <div class="article">
          <p class="tiptip">最新发布</p>
          <div class="article-list">
            <wzzArticleItem class="aasd"
                            v-for="i in 6"
                            :key="i"></wzzArticleItem>
          </div>
        </div>
      </div>
      <div class="right">
        <wzzTipBox></wzzTipBox>
        <wzzTipBox></wzzTipBox>
        <wzzTipBox></wzzTipBox>
        <wzzTipBox></wzzTipBox>
        <wzzTipBox></wzzTipBox>
      </div>
    </div>
  </div>
</template>

<script>
import wzzBanner from '@/components/wzz-banner'
import wzzTipBox from '@/components/wzz-tipBox'

export default {
  name: 'IndexPage',
  components: {
    wzzBanner,
    wzzTipBox

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
.Index-page {
  width: 100%;
  .warrper {
    min-height: 1600px;
    display: flex;
    justify-content: space-between;
    // background-color: yellowgreen;
    .left {
      width: 815px;
      .banner {
        margin-bottom: 20px;
      }
      .article {
        background-color: #fff;
        &-list {
        }
      }
    }
  }
}
</style>
