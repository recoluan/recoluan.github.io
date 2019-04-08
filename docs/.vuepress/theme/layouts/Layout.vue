<template>
  <div>
    <Common></Common>

    <Home v-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
    <Valine :valineRefresh="valineRefresh"></Valine>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import Common from '@theme/components/Common.vue'
import { resolveSidebarItems } from '../util'
import Valine from '@theme/components/Valine/'

export default {
  components: { Home, Page, Common, Valine },

  data () {
    return {
      valineRefresh: false
    }
  },

  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    }
  },

  mounted () {
    console.log(this)
  },

  methods: {
    tagChange () {
      this.valineRefresh = true
      setTimeout(() => {
        this.valineRefresh = false
      }, 300)
    },
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
