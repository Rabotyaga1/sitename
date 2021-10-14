<template>
  <div class="main">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Rubik Mono One';
    src: url('./assets/fonts/RubikMonoOne-Regular.ttf');
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik-VariableFont_wght.ttf');
  }
</style>
