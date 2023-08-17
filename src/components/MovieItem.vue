<template>
<el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
    <div class="movie__wrap">
        <my-button v-if="isDeleteBtn" class="movie__button--delete" @click="store.deleteFromFaivorites(id)">
            <el-icon>
                <Delete />
            </el-icon>
        </my-button>
        <img :src="path ? 'https://image.tmdb.org/t/p/w500/' + path : 'https://img.freepik.com/premium-vector/movie-cinema-premiere-background_41737-251.jpg'" alt="poster" class="movie__img" @click="$router.push(`movies/${ id }`)">
        <span>{{ date }}</span>
        <h3 class="movie__heading" @click="$router.push(`movies/${ id }`)">{{ title }}</h3>
        <span>Score: {{ score }}</span>
        <my-button class="movie__button" @click="$router.push(`movies/${ id }`)">See Details</my-button>
    </div>
</el-col>
</template>

<script>
import {
    useMoviesStore
} from '../stores/movies';
export default {
    props: {
        id: Number,
        path: String,
        date: String,
        title: String,
        score: Number,
        isDeleteBtn: Boolean,
    },
    data() {
        return {
            store: useMoviesStore()
        }
    },
}
</script>

<style>
.movie__wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 483px;
    border-radius: 10px;
    background: var(--white);
    padding: 15px;
    font-family: Inter;
    font-size: 15px;
    color: #5A5A5A;
    margin-bottom: 20px;
    transition: all .5s ease-in-out;
}

@keyframes scale {
    0% {}

    50% {
        transform: scale(1.05)
    }
}

.movie__wrap:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.movie__wrap:hover>.movie__button--delete {
    opacity: 0.8;
}

.movie__img {
    border-radius: 10px;
    margin-bottom: 15px;
    height: 71.2%;
    object-fit: cover;
    width: 100%;
    object-position: center;

}

.movie__heading {
    color: #121212;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie__button {
    margin-top: auto;
}

.movie__button--delete {
    position: absolute;
    z-index: 1;
    width: 45px;
    right: 15px;
    top: 15px;
    border-radius: 10px;
    opacity: 0;
    transition: all .5s ease-in-out;
}
</style>
