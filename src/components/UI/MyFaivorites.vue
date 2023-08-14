<template>
<el-icon class="favorites__icon"><StarFilled /><span class="favorites__count">5</span></el-icon>
</template>

<script>
export default {
    name:'my-faivorites'
}
</script>

<style>
    .favorites__icon{
        height: 45px;
        width: 45px;
        color: var(--blue);
    }

    .favorites__count{
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        color: var(--blue);
        font-style: normal;
    }
</style>