<template>
  <div class="wzz-banner"
       @mouseenter="parsePlay"
       @mouseleave="autoPlay">
    <ul class="banner"
        ref="banner">
      <slot></slot>
    </ul>
    <div class="arrows">
      <img src="../assets/img/leftArrows.png"
           alt=""
           @click="nextItem(-1)">
      <img class="right"
           src="../assets/img/rightArrows.png"
           alt=""
           @click="nextItem(1)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'wzzBanner',
  components: {
  },
  props: {
    auto: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentImg: 0,
      flag: true, // 节流阀
      timer: null
    }
  },
  mounted () {
    this.cloneFirstImg()
    this.autoPlay()
  },
  methods: {
    // 复制第一张图片插入到最后面
    cloneFirstImg () {
      const newNode1 = this.$refs.banner.children[0].cloneNode(true)
      const newNode2 = this.$refs.banner.lastChild.cloneNode(true)
      this.$refs.banner.appendChild(newNode1)
      this.$refs.banner.insertBefore(newNode2, this.$refs.banner.children[0])
    },
    nextItem (i) {
      if (this.flag) {
        this.flag = false
        this.currentImg += i
        this.$refs.banner.style.transition = 'all 0.3s'
        this.$refs.banner.style.transform = `translate(${this.currentImg * -815}px)`
        if (this.currentImg === 4) {
          setTimeout(() => {
            this.$refs.banner.style.transition = 'none'
            this.currentImg = 0
            this.$refs.banner.style.transform = `translate(${this.currentImg * -815}px)`
          }, 300)
        } else if (this.currentImg === -1) {
          setTimeout(() => {
            this.$refs.banner.style.transition = 'none'
            this.currentImg = 3
            this.$refs.banner.style.transform = `translate(${this.currentImg * -815}px)`
          }, 300)
        } else {
          this.$refs.banner.style.transition = 'all 0.3s'
          this.$refs.banner.style.transform = `translate(${this.currentImg * -815}px)`
        }
        setTimeout(() => {
          this.flag = true
        }, 300)
      }
    },
    autoPlay () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.nextItem(1)
        }, 2000)
      }
    },
    parsePlay () {
      clearInterval(this.timer)
    }
  }

}
</script>

<style lang="less" scoped>
.wzz-banner {
  width: 815px;
  height: 350px;
  position: relative;
  overflow: hidden;
  .banner {
    width: 600%;
    height: 100%;
    display: flex;
    position: absolute;
    left: -100%;
    transition: transform 0.3s;
  }

  .arrows {
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .someclass {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
</style>
