<template>
  <div class="wzz-tag"
       :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wzzTag',
  props: ['type'],
  data () {
    return {

    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.wzz-tag {
  display: inline-block;
  line-height: 30px;
  padding: 0 8px;
  border-radius: 6px;
  background-color: #ecf5ff;
  color: #409eff;
  font-size: 14px;
}
.success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.info {
  background-color: #f4f4f5;
  color: #909399;
}
.warning {
  background-color: #fdf6ec;
  color: #ecaa3c;
}
</style>
