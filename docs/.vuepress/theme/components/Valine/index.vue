<template>
  <div id="valine" v-show="isComment"></div>
</template>

<script>


export default {
  computed: {
    // 是否显示评论
    isComment () {
      const frontmatter = this.$page.frontmatter
      return frontmatter.isComment == false || frontmatter.home == true ? false : true
    }
  }, 
  mounted: function(){
    const valineConfig = this.$site.themeConfig.valineConfig
    if (valineConfig) {
      const Valine = require('valine');
      const AV = require('leancloud-storage')
      if (typeof window !== 'undefined') {
        this.window = window
        window.AV = AV
        
      }
      
      new Valine({
        el: '#valine' ,
        appId: valineConfig.appId,// your appId
        appKey: valineConfig.appKey, // your appKey
        verify:false, 
        visitor: false,
        avatar:'retro', 
        path: window.location.pathname,
        placeholder: 'just go go' 
      });
    }
    
  }
};
</script>

<style lang="stylus" scoped>
#valine
  max-width: 740px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color $bgColor
</style>
