<template>
  <div class="categories-wrapper">
    <Common :sidebar="false"></Common>
    <h2 class="title">{{ $page.frontmatter.title }}</h2>
    <note-abstract 
      :data="$category.posts"
      :currentPage="currentPage"
      @currentTag="getCurrentTag"></note-abstract>
    
    <pagation 
      :data="$category.posts"
      :currentPage="currentPage"
      @getCurrentPage="getCurrentPage"></pagation>
  </div>
</template>

<script>
import NoteAbstract from '../components//NoteAbstract.vue'
import Pagation from '../components//Pagation.vue'
import Common from '@theme/components/Common.vue'

export default {
  components: { Common, NoteAbstract, Pagation },

  data () {
    return {
      currentPage: 1
    }
  },

  methods: {

    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },

    getCurrentPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.categories-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0; 
  .title
    margin-bottom 3rem

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>


