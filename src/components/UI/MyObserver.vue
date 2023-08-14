<template>
    <div  ref="observer" class="observer" >   
    </div>

</template>

<script>
import { useMoviesStore } from '../../stores/movies';

export default {
    name:'my-observer',
  data() {
    return {
       store: useMoviesStore() 
    };
  },
  mounted(){
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting){
        if(this.store.searchValue){
          this.store.addPage(true);
          this.store.loadMoreSearchedMovies()
        }else{
          this.store.addPage();
          this.store.fetchMovies();
        }
    }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  }
}
</script>

<style>
    .observer{
        width: 100%;
        height: 10px;
    }
</style>