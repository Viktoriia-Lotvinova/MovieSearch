<template>
<div class="search__wrap">
    <el-input v-model="search" class="w-50 m-2" placeholder="Search for movies and more">
        <template #prefix>
            <el-icon class="el-input__icon">
                <Search />
            </el-icon>
        </template>
        <template #suffix>
            <el-icon class="el-input__icon-close" @click="resetSearch">
                <CircleClose />
            </el-icon>
        </template>
    </el-input>
    <my-button class="search__button" @click="this.store.fetchSearchMovies">Search</my-button>
</div>
</template>

<script>
import {
    useMoviesStore
} from '../../stores/movies';
export default {
    name: 'my-search',
    data() {
        return {
            search: '',
            store: useMoviesStore(),
        }
    },
    watch: {
        search(newValue) {
            this.store.setSearchValue(newValue);
        }
    },
    methods: {
        resetSearch() {
            this.search = '';
            this.store.resetMovies();
        }
    }
}
</script>

<style>
.search__wrap {
    display: flex;

    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 15px;
    }
}

.el-input {
    height: 46px;
    max-width: 340px;
    border-radius: 10px;
    background: #F4FEFF;
    color: #B5CDD0;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.267px;
}

.search__button {
    padding: 0 15px;
    margin-left: 15px;
}

.el-input__icon-close:hover {
    cursor: pointer;
}
</style>
