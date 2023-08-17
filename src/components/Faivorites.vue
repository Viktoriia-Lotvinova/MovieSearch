<template>
<div class="container faivorites__wrap">
    <my-h1-heading class="faivorites__heading">List of your faivorite movies</my-h1-heading>
    <el-row :gutter="20">
        <p v-if="!store.listOfFaivorites.length">Although it's currently empty, this page holds the promise of unforgettable cinematic experiences.
            Your future favorite movies will find their place here,
            a reflection of the stories that have touched your heart and the characters that have become like
            old friends. From heartwarming romances to pulse-pounding adventures, this page will soon be a
            canvas of your unique cinematic journey. So, stay tuned and get ready to share the magic of your
            favorite films with the world!</p>
        <transition-group appear name="list">
            <MovieItem v-for="movie in this.store.listOfFaivorites" :key="movie.id" :id="movie.id" :isDeleteBtn="true" :path="movie.poster_path" :date="movie.release_date" :title="movie.title" :score="movie.vote_average" />
        </transition-group>
    </el-row>
</div>
</template>

<script>
import MovieItem from './MovieItem.vue';
import {
    useMoviesStore
} from '../stores/movies';

export default {
    components: {
        MovieItem
    },
    data() {
        return {
            store: useMoviesStore()
        }
    },

}
</script>

<style>
.faivorites__wrap {
    flex-direction: column;
    margin-top: 50px;
}

.faivorites__heading {
    margin-bottom: 40px;
}
</style>
