<template>
  <div>
    <Navbar />
    <main>
      <div class="conteiner">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>



<style lang="scss">
@import '../assets/scss/styles.scss';
</style>
