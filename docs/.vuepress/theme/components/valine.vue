<template>
  <div id="valine"></div>
</template>

<script>


export default {
  mounted: function(){
    const Valine = require('valine');
    const AV = require('leancloud-storage')
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = AV
      
    }
     
    new Valine({
      el: '#valine' ,
      appId: 'Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz',// your appId
      appKey: 'iLQlev5jo2Cm5pLcI0z3qhtr', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  }
};
</script>

<style lang="stylus" scoped>
#valine
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2.5rem;
</style>