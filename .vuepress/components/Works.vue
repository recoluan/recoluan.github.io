<template>
  <div class="works__container">
    <MagicCard
      class="works__item"
      v-for="(item, index) in data"
      :key="index"
      @click="() => jumpLink(item.link)"
    >
      <h4>{{ item.title }}</h4>
      <p>{{ item.desc }}</p>
    </MagicCard>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    title: '📖 Blog',
    desc: "Reco's blogs.",
    link: 'http://blog.recoluan.com'
  },
  {
    title: '📖 Work',
    desc: "Reco's work records.",
    link: 'http://work.recoluan.com'
  },
  {
    title: '🎨 vuepress-theme-reco',
    desc: 'A simple vuepress Blog & Doc theme.',
    link: 'https://vuepress-theme-reco.recoluan.com'
  },
  {
    title: '🎨 vscode-theme-reco',
    desc: 'This Theme as much as possible according to vuepress-theme-reco.',
    link: 'https://marketplace.visualstudio.com/items?itemName=recoluan.vscode-theme-reco'
  },
]

const jumpLink = (link?: string) => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<style scoped>
@import '@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css';

.works__container {
  @apply grid grid-cols-1 gap-4 max-w-screen-lg mx-auto my-16 px-6;
  @apply md:grid-cols-3;
  .works__item {
    @apply py-4 px-6 cursor-pointer;
    h4 {
      @apply mt-0 mb-0 pt-0;
    }
    p {
      @apply my-4 text-lighter;
    }
  }
}
</style>
