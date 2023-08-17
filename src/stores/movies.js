import {
  defineStore
} from 'pinia'
import {
  useStorage
} from '@vueuse/core'

export const useMoviesStore = defineStore('movies', {
  state: () => {
    return {
      movies: [],
      options: {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWIwZWY1MDNhZjk3MjY4MzFmZWU2OGVjNmQ4MGU1NCIsInN1YiI6IjY0YjM5NzdkMzc4MDYyMDBlMmFiNTU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEmmfHq34FwTBPzj8RJXy5oyhbpu42HVGF0qhGTVuiQ'
        }
      },
      page: 1,
      tab: 'popular',
      searchValue: '',
      searchPage: 1,
      movieDetails: {},
      listOfFaivorites: useStorage('faivorites', []),
    }
  },
  actions: {
    fetchMovies() {
      fetch(`https://api.themoviedb.org/3/movie/${this.tab}?language=en-US&page=${this.page}`, this.options)
        .then(response => response.json())
        .then(response => this.movies = [...this.movies, ...response.results])
        .catch(err => console.error(err));
    },
    addPage(option) {
      if (option) {
        this.searchPage += 1;
      } else {
        this.page += 1;
      }
    },
    resetPage() {
      this.page = 1;
    },
    changeTab(newTab) {
      this.tab = newTab.split(' ').join('_').toLowerCase()
    },
    clearMovies() {
      this.movies = [];
    },
    resetMovies() {
      this.clearMovies();
      this.resetPage();
      this.fetchMovies();
    },
    setSearchValue(value) {
      this.searchValue = value.toLowerCase().split(' ').join('%20');
    },
    loadMoreSearchedMovies() {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${this.searchValue}&include_adult=false&language=en-US&page=${this.searchPage}}`, this.options)
        .then(response => response.json())
        .then(response => this.movies = [...this.movies, ...response.results])
        .catch(err => console.error(err));
    },
    fetchSearchMovies() {
      this.clearMovies();
      this.searchPage = 1;

      fetch(`https://api.themoviedb.org/3/search/movie?query=${this.searchValue}&include_adult=false&language=en-US&page=${this.searchPage}}`, this.options)
        .then(response => response.json())
        .then(response => this.movies = response.results)
        .catch(err => console.error(err));
    },
    fetchMovieInfo(variable, movieId) {
      fetch(`https://api.themoviedb.org/3/movie/${ movieId }?language=en-US`, this.options)
        .then(response => response.json())
        .then(response => this[variable] = response)
        .catch(err => console.error(err));
    },
    checkIfMovieExists(movieId) {
      if (this.listOfFaivorites.length) {
        let existingMovie = this.listOfFaivorites.some((movie) => movie.id == movieId);
        if (existingMovie) {
          alert('This movie is already in your faivorites list');
        } else {
          this.addToFaivorites(movieId);
          alert('Movie added to your faivorites list');
        }
      } else {
        this.addToFaivorites(movieId);
        alert('Movie added to your faivorites list');
      }
    },
    addToFaivorites(newId) {
      fetch(`https://api.themoviedb.org/3/movie/${ newId }?language=en-US`, this.options)
        .then(response => response.json())
        .then(response => this.listOfFaivorites = [...this.listOfFaivorites, response])
        .catch(err => console.error(err))
    },
    deleteFromFaivorites(id) {
      this.listOfFaivorites = this.listOfFaivorites.filter((movie) => {
        return movie.id != id;
      });
    }

  }

})