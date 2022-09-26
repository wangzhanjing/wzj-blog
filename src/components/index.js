import wzzBanner from './wzz-banner'
import wzzBannerItem from './wzz-bannerItem'
import wzzNavMenu from '@/components/wzz-navMenu'
import wzzTag from '@/components/wzz-tag'
import wzzArticleItem from '@/components/wzz-articleItem'

export default {
  install (Vue) {
    Vue.component('wzzBanner', wzzBanner)
    Vue.component('wzzBannerItem', wzzBannerItem)
    Vue.component('wzzNavMenu', wzzNavMenu)
    Vue.component('wzzTag', wzzTag)
    Vue.component('wzzArticleItem', wzzArticleItem)
  }
}
