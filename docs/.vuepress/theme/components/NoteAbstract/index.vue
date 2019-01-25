<template>
  <div class="abstract-wrapper">
    <div
      v-for="(item, index) in formatData"
      :key="index"
      class="abstract-item">
      <div class="title">
        <router-link
          :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <hr>
      <div class="flex-wrapper">
        <div>
          <i
            class="iconfont reco-account"
            v-if="item.frontmatter.author || siteInfo.themeConfig.author || siteInfo.title">
            <span>{{ item.frontmatter.author || siteInfo.themeConfig.author || siteInfo.title }}</span>
          </i>
          <i class="iconfont reco-date" v-if="item.frontmatter.date"><span>{{ item.frontmatter.date }}</span></i>
          <i class="iconfont reco-tag tags" v-if="item.frontmatter.tags">
            <span
              v-for="(subItem, subIndex) in item.frontmatter.tags"
              :key="subIndex"
              class="tag-item"
              :class="{ 'active': currentTag == subItem }"
              @click="goTags(subItem)">
              {{subItem}}
            </span>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'currentPage', 'currentTag'],
  computed: {
    siteInfo () {
      return this.$site
    },
    formatData () {
      const data = this.data
      const currentPage = this.currentPage
      return data.slice(currentPage * 10 - 10, currentPage * 10)
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

.abstract-wrapper
  width 100%
  .abstract-item
    margin: 0 auto 20px;
    padding: 16px 20px;
    width 100%
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    box-sizing: border-box;
    transition all .3s
    background-color $bgColor
    &:hover
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
    .title
      position: relative;
      font-size: 1.28rem;
      line-height: 36px;
      display: inline-block;
      :after
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $accentColor;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: .3s ease-in-out;
      :hover:after
        visibility visible
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
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
