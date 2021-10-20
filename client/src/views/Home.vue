<template>
  <p>{{ movies }}</p>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return { movies: [] };
  },
  created() {
    this.getMovies();
  },
  components: {},
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
