<template>
<div class="container movies__wrap">
    <el-row :gutter="20">
        <p v-if="!this.store.movies.length" class="search-error__paragraph">We're sorry, but it seems that the movie you're looking
            for isn't available in our current database.
            Our team is constantly working to update
            our movie collection and provide you with the
            latest and greatest titles. While we strive to
            offer a comprehensive selection, there might be
            instances where certain movies aren't currently accessible.
            We apologize for any inconvenience this may cause.</p>
        <MovieItem v-for="movie in this.store.movies" :key="movie.id" :id="movie.id" :path="movie.poster_path" :date="movie.release_date" :title="movie.title" :score="movie.vote_average" class="list-item" />
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
    mounted() {
        this.store.tab = 'popular';
        this.store.page = 1;
        this.store.clearMovies();
        this.store.fetchMovies();
    }
}
</script>

<style>
.movies__wrap {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

.search-error__paragraph {
    padding: 10px;
}
</style>
