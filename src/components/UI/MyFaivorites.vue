<template>
<el-icon class="favorites__icon">
    <StarFilled /><span class="favorites__count">{{ store.listOfFaivorites.length }}</span></el-icon>
</template>

<script>
import {
    useMoviesStore
} from '../../stores/movies';

export default {
    name: 'my-faivorites',
    data() {
        return {
            store: useMoviesStore()
        }
    }
}
</script>

<style>
.favorites__icon {
    height: 45px;
    width: 45px;
    font-size: 20px;
    color: var(--blue);
}

.favorites__count {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    color: var(--blue);
    font-style: normal;
}
</style>
