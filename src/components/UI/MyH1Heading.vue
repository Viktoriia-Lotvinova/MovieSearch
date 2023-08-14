<template>
    <h1 class="main__heading"><slot></slot></h1>
</template>

<script>
export default {
  name:'my-h1-heading'  
}
</script>

<style>
    .main__heading{
    color:var(--blue);
    font-family: Dela Gothic One;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 1px; 

    @media (max-width: 992px)  {
        font-size: 45px;
    }

    @media (max-width: 768px )  {
        text-align: center;
    }
}
</style>