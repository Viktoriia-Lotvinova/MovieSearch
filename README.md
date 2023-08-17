# movie_search

This project is a web application that allows users to search for movies and view various lists of movies based on popularity, top-rated, and upcoming releases. Users can also mark movies as favorites, and these selections will be stored using local storage for a personalized experience.
Deploy link --- https://64de7589c4b2ef0c0b393c3a--soft-torte-00418f.netlify.app/

## Main Functionality

- **Movie Search**: Users can search for movies using keywords, and the application will display a list of relevant movies based on their search queries.

- **Movie Lists**: The application provides three main lists of movies:
  - **Popularity**: Displays movies that are currently popular among users.
  - **Top Rated**: Displays movies that have the highest user ratings.
  - **Upcoming Releases**: Displays movies that are scheduled for future release.

- **Favorites Functionality**: Users have the ability to mark movies as favorites. These favorite selections will be saved using local storage, allowing users to access their favorite movies even after closing the browser.

 ## Technologies Used

- **Vue 3**: The front-end of the application is built using Vue 3, a progressive JavaScript framework.
- **Vue Router**: Vue Router is used for handling routing within the application, allowing for seamless navigation between different views.
- **Pinia**: Pinia is used for state management, providing a reactive store for managing application-wide data.
- **Elements+**: Elements+ is a UI framework that enhances the styling and components of Vue, providing a sleek and user-friendly interface.
- **TMDB API**: The application fetches movie data from the TMDB API, enabling access to movie details, images, and other relevant information.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
