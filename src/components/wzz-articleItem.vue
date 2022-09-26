<template>
  <div class="wzz-articleItem">
    <h3>文章标题</h3>
    <div class="tags">
      <wzzTag>标签一</wzzTag>
      <wzzTag type="success">标签二</wzzTag>
      <wzzTag type="info">标签三</wzzTag>
      <wzzTag type="warning">标签四</wzzTag>
    </div>
    <div class="synopsis">
      <p>标签一标签 签一标一asfasfasgasgasgasgsfasfasgasgasgasg标签标签sfasfasgasgasgasg标签标签sfasfasgasgasgasg标签标签sfasfasgasgasgasg标签标签sfasfasgasgasgasg标签标签sfasfasgasgasgasg标签标签标签标签一标签一标签一标签一标签一标签一</p>
    </div>
    <div class="bottom">
      <img src="../assets/img/readTime.png"
           alt="">
      <span>131313</span>
      <img src="../assets/img/time.png"
           alt="">
      <span>2022.09.23</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wzzArticleItem',
  props: {
    articleDetial: {
      require: true,
      default: () => ([])
    }
  }
}
</script>

<style lang="less" scoped>
.wzz-articleItem {
  // height: 205px;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: #eeeeee;
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .tags {
    margin-bottom: 10px;
  }
  .synopsis {
    p {
      line-height: 22px;
      overflow: hidden;
      /* 向用户发出未显示的溢出内容的信号： */
      text-overflow: ellipsis;
      display: -webkit-box;
      /* 可以把块容器中的内容限制为指定的行数. 它只有在 display 属性设置成 -webkit-box 或
            者 -webkit-inline-box 并且 -webkit-box-orient (en-US) 属性设置成 vertical时才有效
            果 */
      -webkit-line-clamp: 3;
      /* 从上到下垂直排列子元素 */
      -webkit-box-orient: vertical;
    }
  }
  .bottom {
    height: 30px;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-size: 16px;
    img {
      height: 16px;
      margin-right: 5px;
    }
    span {
      margin-right: 20px;
    }
  }
}
</style>
