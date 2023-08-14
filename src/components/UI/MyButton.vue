<template>
   <button>
        <slot></slot>
   </button>
</template>

<script>
export default {
    name:'my-button',

}
</script>

<style>
    button{
        border-radius: 5px;
        background-color: var(--blue); 
        color: var(--white);
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600; 
        text-align: center;
    }

    button:hover {
    color:#D3F0F4;
    transition: var(--el-transition-all);
    }
</style>