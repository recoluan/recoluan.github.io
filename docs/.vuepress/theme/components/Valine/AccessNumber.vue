<template>
  <span v-if="$site.themeConfig.valineConfig" :id="id" class="leancloud-visitors" data-flag-title="Your Article Title">
    <i class="iconfont reco-eye" style="margin-right: .5rem"><a class="leancloud-visitors-count" :style="numStyle"></a></i> 
  </span>
</template>

<script>
export default {
  props: ['idVal', 'numStyle'],
  data () {
    return {
      id: ''
    }
    
  },
  created () {
    this.id = this.idVal || window.location.pathname
  }
}
</script>

<style lang="stylus" scoped>
.leancloud-visitors-count
  margin-left .5rem
</style>

