<template>
    <div class="container movie-details__wrap">
        <el-row gutter="15">
            <el-col :span="12"><img src="https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" alt="poster" class="movie-details__img"></el-col>
            <el-col :span="12">
                <h3 class="movie-details__heading">Barbie</h3>
                <p><span class="movie-details__span">Tagline: </span>She's everything. He's just Ken.</p>
                <p><span class="movie-details__span">Release date: </span>2023-07-19</p>
                <p><span class="movie-details__span">Country: </span>United Kingdom</p>
                <p><span class="movie-details__span">Genre: </span>Comedy</p>
                <p><span class="movie-details__span">Rating: </span> 7.482</p>
                <p><span class="movie-details__span">Description: </span>Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.</p>
                <my-button class="movie-details__button">Add to faivorites</my-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
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