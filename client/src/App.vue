<template>
  <v-app>
    <v-main>
      <v-app-bar class="blue grey lighten-5" app>
        <div class="d-flex align-center">
          <img class="mt-10" src="logo.png" width="100" />
          <h1>Movies</h1>
        </div>
        <v-spacer></v-spacer>
        <v-btn href="https://www.imdb.com/movies-in-theaters/" target="_blank" text
          >Lastest Realese <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
