<template>
  <section>
    <div class="profil">
    <img src="/profil.png">
    <h1>{{user.name}}</h1>

    <hr>

    <h3>{{user.email}}</h3>
    </div>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    return {user}
  }
}
</script>

<!--<style scoped>-->
<!--img {-->
<!--width: 190px;-->
<!--position: static;-->

<!--}-->
<!--.profil{-->
<!--margin:30px;-->
<!--}-->
<!--</style>-->
