<template>
<header>
    <div class="container">
        <router-link to="/" class="icon__wrapper">
            <img src="/assets/images/icon.png" alt="">
            <span class="icon__text">Movie</span>
        </router-link>
        <router-link to="/faivorites">
            <my-faivorites></my-faivorites>
        </router-link>
    </div>
</header>
</template>

<script>
import {
    RouterLink
} from 'vue-router'

export default {
    name: 'Header',
}
</script>

<style>
header {
    margin-top: 20px;
}

.icon__wrapper {
    display: flex;
    align-items: center;

}

.icon__text {
    font-family: 'Inter', sans-serif;
    color: var(--blue);
    color: #115;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 19px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.267px;
    margin-left: 15px;
}
</style>
