<template>
    <div class="container filters__wrap">
        <my-search></my-search>
        <my-radio></my-radio>
    </div>
</template>

<script>
export default {
   
}
</script>

<style>
.filters__wrap{
    align-items: center;
    
    @media (max-width: 768px )  {
       display: flex;
       flex-direction: column;
    }
}
   
</style>