<template>
  <transition name="fade">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <i :class="`iconfont ${icon}`"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return {
      visible: false,
      interval: null,
      isMoving: false,
      icon: ICON,
      customStyle: CUSTOM_STYLE,
      visibilityHeight: VISIBILITY_HEIGHT
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    backToTop() {
      if (this.isMoving) return
      const start = window.pageYOffset
      let i = 0
      this.isMoving = true
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
        if (next <= 0) {
          window.scrollTo(0, 0)
          clearInterval(this.interval)
          this.isMoving = false
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 16.7)
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * (--t * (t - 2) - 1) + b
    }
  }
}
</script>

<style lang="stylus" scoped>
@require './iconfont.css'
  .back-to-ceiling
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    &::hover
      background: #d5dbe7;
    i 
      font-size 1.6rem
      color $accentColor
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0
    transform translateY(120px)
  }
</style>