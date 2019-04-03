<template>
  <div class="password-shadow">
    <Background></Background>
    <label class="inputBox" id="box">
      <input
        v-model="key"
        type="password"
        @keyup.enter="inter"
        @focus="inputFocus"
        @blur="inputBlur">
      <span>{{warningText}}</span>
      <button ref="passwordBtn" @click="inter">OK</button>
    </label>
  </div>
</template>

<script>
import Background from '../Background/'
import key from '../../util/handleKey'

export default {
  components: {Background},
  name: 'BackToTop',
  data() {
    return {
      warningText: 'Konck! Knock!',
      key: ''
    }
  },
  methods: {
    inter () {
      const keyVal = this.key.trim()
      key.set(keyVal)
      if (!this.isHasKey()) {
        this.warningText = 'Key Error'
        return
      } 
      const passwordBtn = this.$refs.passwordBtn
      const width = document.getElementById('box').getClientRects()[0].width

      passwordBtn.style.width = `${width - 2}px`
      passwordBtn.style.opacity = 1
      setTimeout(() => {
        window.location.reload();
      }, 800)
    },
    isHasKey () {
      const keyPage = this.$site.themeConfig.keyPage
      const {keys} = keyPage
      return key.isHasKey(keys)
    },
    inputFocus () {
      this.warningText = 'Input Your Key'
    },
    inputBlur () {
      this.warningText = 'Konck! Knock!'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/config.styl'
  
.password-shadow {
  width 100vw;
  height 100vh;
  background #fff
  position relative
}

.inputBox{
  max-width:700px;
  height: 100px;
  background: $accentColor;
  border-radius: 2px;
  position: absolute;
  left 0
  right 0
  top 0
  bottom 0
  margin auto
  padding-left 20px
  box-sizing border-box
  opacity 0.9
}
.inputBox input{
  width:600px;
  height:100%;
  border:none;
  padding:0;
  padding-left:5px;
  color: #fff;
  background: none;
  outline: none;
  position: absolute;
  bottom:0;
  opacity 0
  font-size 50px
}
.inputBox input:focus {
  opacity 1
}
.inputBox input:focus~span{
  transform: translateY(-80px);
  color $accentColor
  font-size 30px
  opacity:0.8;
}
.inputBox input:focus~button{
  opacity:1;
  width:100px;
}
.inputBox span{
  width:200px;
  height: 100%;
  display: block;
  position: absolute;
  line-height:100px;
  top:0;
  left:20px;
  color: #fff;
  cursor: text;
  transition: 0.5s;
  transform-origin: left top;
  font-size 30px
}
.inputBox button{
  width:0px;
  height:98px;
  border-radius: 2px;
  position: absolute;
  border 1px solid $accentColor
  right:1px;
  top 1px
  border:0;
  padding:0;
  background: #fff;
  color: $accentColor;
  font-size:18px;
  outline:none;
  cursor: pointer;
  opacity:0;
  transition: 0.5s;
  z-index: 1;
}
</style>