<template>
  <div class="categories-wrapper">
    <h2>{{category}}</h2>
    <note-abstract 
      :data="pages"
      :currentPage="currentPage"
      @currentTag="getCurrentTag"></note-abstract>
    
    <pagation 
      :data="pages"
      :current-page="currentPage"
      @getCurrentPage="getCurrentPage"></pagation>
  </div>
</template>

<script>
import NoteAbstract from '../NoteAbstract/'
import Pagation from '../Pagation/'

export default {
  props: {
    category: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      pages: [],
      currentPage: 1
    }
  },
  watch: {
    category () {
      this.getPagesByCategories()
    }
  },
  mounted () {
    this.currentPage = 1
    this.getPagesByCategories()
  },
  methods: {
    // 根据分类获取页面数据
    getPagesByCategories () {
      let pages = this.$site.pages,
          category = this.category
      pages = pages.filter(item => {
        return item.frontmatter.categories == category
      })
      // reverse()是为了按时间最近排序排序
      this.pages = pages.length == 0 ? [] : pages.reverse()
    },
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    getCurrentPage (page) {
      this.currentPage = page
    }
  },
  components: {
    NoteAbstract,
    Pagation
  }
}
</script>

<style lang="stylus">
@import '../../styles/config.styl'
@require '../../styles/wrapper.styl'

.categories-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4rem 2.5rem 0; 

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4rem 0.6rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

</style>
