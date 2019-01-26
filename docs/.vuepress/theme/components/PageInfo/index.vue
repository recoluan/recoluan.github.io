<template>
  <div>
    <i
      class="iconfont reco-account"
      v-if="pageInfo.frontmatter.author || siteInfo.themeConfig.author || siteInfo.title">
      <span>{{ pageInfo.frontmatter.author || siteInfo.themeConfig.author || siteInfo.title }}</span>
    </i>
    <i class="iconfont reco-date" v-if="pageInfo.frontmatter.date"><span>{{ pageInfo.frontmatter.date }}</span></i>
    <i class="iconfont reco-tag tags" v-if="pageInfo.frontmatter.tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click="goTags(subItem)">
        {{subItem}}
      </span>
    </i>
  </div>
</template>

<script>
export default {
  props: ['pageInfo', 'currentTag'],
  computed: {
    siteInfo () {
      return this.$site
    }
  },
  methods: {
    goTags (tag) {
      const tagClick = this.$site.themeConfig.tagClick
      this.$emit('currentTag', tag)
      if (tagClick == true) {
        // 目前通过name跳转会报错
        this.$router.push({path: '/tags/'})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/config.styl'

.tags
  .tag-item
    cursor: pointer;
    &.active
      color $accentColor
    &:hover 
      color $accentColor

@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
