<template>
  <div class="tags-wrapper">
    <Common :sidebar="false"></Common>
    <div class="tags">
      <span 
        v-for="(item, index) in tags" 
        :key="index"
        :class="{'active': item.name == currentTag}"
        :style="{ 'backgroundColor': item.color }"
        @click="getPagesByTags(index, item.name)">{{item.name}}</span>
    </div>
    <note-abstract 
      :data="posts"
      :currentPage="currentPage"
      @currentTag="getCurrentTag"></note-abstract>
    
    <pagation 
      :data="posts"
      :currentPage="currentPage"
      @getCurrentPage="getCurrentPage"></pagation>
  </div>
</template>

<script>
import Common from '@theme/components/Common.vue'
import NoteAbstract from '../components//NoteAbstract.vue'
import Pagation from '../components//Pagation.vue'

export default {
  components: { Common, NoteAbstract, Pagation },

  data () {
    return {
      posts: [],
      tags: [],
      currentTag: '',
      currentPage: 1
    }
  },

  created () {
    let tags = this.$tags.list
    tags.map(item => {
      const color = this._tagColor()
      item.color = color
      return tags
    })
    this.tags = tags

    const firstTag = this.$tags.list[0].name
    this.getPagesByTags(0, firstTag ? firstTag : '')
  },

  methods: {

    // 根据分类获取页面数据
    getPagesByTags (index, tagName) {

      this.currentTag = tagName

      this.$emit('tagChange')
      let posts = this.$tags.list[index].posts
      posts.sort((a, b) => {
        return this._getTimeNum(b) - this._getTimeNum(a)
      })
      // reverse()是为了按时间最近排序排序
      this.posts = posts.length == 0 ? [] : posts
      
      this.getCurrentPage(1);
    },

    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },

    getCurrentPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
    },

    _tagColor () {
      // 红、蓝、绿、橙、灰
      const tagColorArr = ['#f26d6d', '#3498db', '#67cc86', '#fb9b5f', '#838282']
      const index = Math.floor(Math.random() * tagColorArr.length)
      return tagColorArr[index]
    },

    // 获取时间的数字类型
    _getTimeNum (date) {
      return parseInt(new Date(date.frontmatter.date).getTime())
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.tags-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0; 
  .tags
    margin-bottom 30px
    span
      vertical-align: middle;
      margin: 4px 4px 10px;
      padding: 4px 8px;
      display: inline-flex;
      cursor: pointer;
      border-radius: 2px;
      background: #fff;
      color: #fff;
      font-size: 13px;
      box-shadow 0 1px 4px 0 rgba(0,0,0,0.2)
      transition: all .5s
      &:hover
        transform scale(1.04)
      &.active
        transform scale(1.2)

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 0 0.6rem;
</style>


