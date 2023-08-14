<template>
    <div class="container heading__wrap"> 
        <el-row>
            <el-col :span="16"  :xs="24" :sm="16" :md="16" :lg="16">
                <my-h1-heading>Most complete<br> movie information search engine</my-h1-heading>
            </el-col>
        <el-col :span="8"  :xs="8" :sm="8" :md="8" :lg="8">
            <p class="paragraph">Welcome to the most comprehensive movie information 
                search engine! Discover an extensive collection of films, 
                complete with details, reviews, trailers, and more.
            </p>
            <p class="paragraph">
                Happy searching and enjoy the magic of movies! 
                Get ready to explore a world of cinematic wonders and let us be your 
                guide to the fascinating realm of movies!
            </p>
        </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.heading__wrap{
    margin-top: 70px;
    margin-bottom: 80px;

    @media (max-width: 768px )  {
        margin-bottom: 50px;
    }

}

p{
    color: #64898E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: 0.5px; 
    text-align: justify;
    margin-bottom: 20px;
}

.paragraph{
    @media (max-width: 768px )  {
        display: none;
    }
}

</style>