<script>
import Header from '../components/Header.vue';
import MainHeading from '../components/MainHeading.vue';
import Filter from '../components/Filter.vue';
import Movies from '../components/Movies.vue';

export default{
components:{
  Header,
  MainHeading,
  Filter,
  Movies
},
}
</script>

<template>
 <Header></Header>
 <MainHeading/>
 <Filter/>
 <Movies/>
 <my-to-top></my-to-top>
 <my-observer></my-observer>
</template>

<style>

</style>