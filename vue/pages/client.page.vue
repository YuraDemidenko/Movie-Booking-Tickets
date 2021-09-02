<template v-if="isLogedIn">

    <div class="client-container">

        <div class="client-page-bg"></div>

        <div class="client">
            <div class="cinema-app-header">
                <div class="cinema-app-nav-bar">
                    <div class="genre-filter">
                        <button class="genre-filter-btn" v-on:click="filter('comedy')">Comedy</button>
                        <button class="genre-filter-btn" v-on:click="filter('action')">Action</button>
                        <button class="genre-filter-btn" v-on:click="filter('drama')">Drama</button>
                        <button class="genre-filter-btn" v-on:click="filter('crime')">Crime</button>
                        <button class="genre-filter-btn" v-on:click="filter('')">All Movies</button>
                    </div>
                    <div class="movie-search">
                        <img src="../img/search.svg" alt="">
                        <input type="text" class="search" v-model="query"> 
                    </div>
                </div>
            </div>

            <div class="movie-promo">

                <div class="movie-list">
                    <div class="list-wrapper" v-if="filteredMovies.length">

                        <h2 class="movie-list-title">Movies</h2>

                        <router-link :to="{name: 'ticket-page'}">
                            <div class="promo-box" v-for="(movie, index) in filteredMovies" :key="index" v-on:click="getMovie(movie)">
                                <div class="promo-title">
                                    <img :src="movie.poster">
                                    <p>{{movie.title}}</p>
                                </div>
                            </div>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="less">
   
</style>


<script>
    module.exports = {
        
        data: function () {
            return {
                genre: '',
                query: ''
            }
            
        },
       
        methods: {
            filter: function(genre) {
                this.genre = genre;     
            },

            getMovie: function(movie) {
                // this.$store.commit('setIndex', index);  
                this.$store.commit('seeMovieInfo', movie);  
                // console.log(movie);
            }
            

        },
        
        computed: {
            movies: function() {
                return this.$store.getters['movies'];
            },

            filteredMovies: function () {
                let query = this.query.toLowerCase();
                let genre = this.genre.toLowerCase();

                let buffer = this.movies;

                buffer = buffer.filter(function(movie) {
                    return ~movie.title.toLowerCase().indexOf(query)
                        && ~movie.genre.toLowerCase().indexOf(genre);
                       
                    
                });
                return buffer;
            },

            isLogedIn: function() {
                return this.$store.getters['isLogedIn'];
            }

           
        },


    }   
</script> 
