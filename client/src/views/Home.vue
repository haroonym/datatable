<template>
  <div>
    <v-alert class="mx-auto" color="blue-grey darken-2 white--text" dark width="75%"> <b>Rent selected movies:</b> {{ filteredItem }} </v-alert>
    <v-data-table
      :headers="headers"
      :items="movies"
      :items-per-page="6"
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
      show-select
      toggles-select-all
      v-model="selectedItem"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      selectedItem: [],
      headers: [
        { text: 'Title', value: 'title', class: 'blue-grey lighten-5' },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'main_genre', class: 'blue-grey lighten-5' },
        { text: 'Year', value: 'year', width: 100, class: 'blue-grey lighten-5' },
        { text: 'Rated', value: 'rated', class: 'blue-grey lighten-5' },
        { text: 'Plot ', value: 'plot' },
      ],
    };
  },
  created() {
    this.getMovies();
  },
  computed: {
    filteredItem: function() {
      return this.selectedItem
        .filter((el) => el.title)
        .map(({ title }) => title)
        .join(' | ');
    },
  },
  methods: {
    async getMovies() {
      try {
        const { data } = await axios({
          url: 'http://127.0.0.1:3000/movies',
          method: 'GET',
        });
        this.movies = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
