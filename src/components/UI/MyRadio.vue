<template>
    <el-radio-group v-model="radio" size="large">
      <el-radio-button label="Popular" name="lol"/>
      <el-radio-button label="Top rated" />
      <el-radio-button label="Upcoming" />
    </el-radio-group>
</template>

<script>
import { useMoviesStore } from '../../stores/movies';

export default {
    name:'my-radio',
    data(){
        return{
            radio: 'Popular',
            store: useMoviesStore(),
        }
    },
    watch: {
    radio(newValue) {
        this.store.resetPage();
        this.store.changeTab( newValue.split(' ').join('_').toLowerCase())
        this.store.clearMovies();
        this.store.fetchMovies();
    }
  }
}
</script>


<style>
    .el-radio-group{
        margin-left: 30px;

    @media (max-width: 768px )  {
        margin-left: 0;
        justify-content: center;
    }
    }

     .el-radio-button__inner{
        border-radius: 5px;
        background-color: var(--blue); 
        color: var(--white);
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600; 
    }

    .el-radio-button__inner:hover {
    color:#D3F0F4;
    }

    .el-radio-button__original-radio:checked+.el-radio-button__inner{
        color:var(--blue); 
        background-color:  var(--white);
        border-color: var(--white);
    }

    .el-radio-button--large .el-radio-button__inner{
        @media (max-width: 480px ) {
        font-size: 10px;
    }
    }
</style>