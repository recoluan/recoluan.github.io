<template>
  <span v-if="$site.themeConfig.valineConfig" :id="id" class="leancloud-visitors" data-flag-title="Your Article Title">
    <i class="iconfont reco-eye" style="margin-right: .5rem"></i> <a class="leancloud-visitors-count"></a>
  </span>
</template>

<script>
export default {
  props: ['idVal'],
  data () {
    return {
      id: ''
    }
    
  },
  mounted () {
    this.id = this.idVal || window.location.pathname
  }
}
</script>

