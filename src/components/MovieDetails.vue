<template>
    <div class="container movie-details__wrap">
        <el-row gutter="15">
            <el-col :span="12"><img :src=" movieDetails.poster_path ? 'https://image.tmdb.org/t/p/w500/' +  movieDetails.poster_path  : 'https://img.freepik.com/premium-vector/movie-cinema-premiere-background_41737-251.jpg'" alt="poster" class="movie-details__img"></el-col>
            <el-col :span="12">
                <h3 class="movie-details__heading">{{ movieDetails.title }}</h3>
                <p><span class="movie-details__span">Tagline: </span> {{ movieDetails.tagline }} </p>
                <p><span class="movie-details__span">Release date: </span> {{ movieDetails.release_date }} </p>
                <p><span class="movie-details__span">Country: </span> <my-text v-for="country in movieDetails.production_countries"> {{ country.name }}</my-text> </p>
                <p><span class="movie-details__span">Genre: </span> <my-text v-for="genre in movieDetails.genres"> {{ genre.name + " " }} </my-text></p>
                <p><span class="movie-details__span">Rating: </span> {{ movieDetails.vote_average }}</p>
                <p><span class="movie-details__span">Description: </span>{{ movieDetails.overview }}</p>
                <my-button class="movie-details__button" @click="show">Add to faivorites</my-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies';

export default {
    data(){
        return{
            movieDetails: [],
            store: useMoviesStore(),
        }
    },
    mounted(){
        fetch(`https://api.themoviedb.org/3/movie/${ this.$route.params.id }?language=en-US`, this.store.options)
            .then(response => response.json())
            .then(response => this.movieDetails = response)
            .then(response => console.log(response))
            .catch(err => console.error(err)); 
    },
    methods:{
        
    }

}
</script>


<style>
    .movie-details__wrap{
        margin-top: 40px;
        font-family: Inter;
        border-radius: 10px;
        background: var(--white);
        padding: 15px;
    }

    .movie-details__img{
        border-radius: 10px;
        margin-right: 50px;
    }

    .movie-details__heading{
        color: #121212;
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
    }

    .movie-details__span{
        font-weight: 700;
    }    

    .movie-details__button{
        padding: 10px;
    }
</style>