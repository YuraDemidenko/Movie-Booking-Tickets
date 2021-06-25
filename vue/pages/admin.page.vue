<template v-if="isLogedIn">

    <div class="admin">

        <div class="movie-form">

            <div class="form-box">
                <h1>Movie Form</h1>

                <div class="wrapper-box">
                    <input type="text" class="title field" placeholder="Enter Title" v-model="movie.title">
                    <input type="text" class="genre" placeholder="Enter Genre" v-model="movie.genre">
                    <input type="text" class="price" placeholder="Enter Price" v-model="movie.price">
                    <input type="text" class="poster" placeholder="Enter Poster url" v-model="movie.poster">
                    <input type="text" class="date" placeholder="Enter Date exp: 01/01/2021" v-model="movie.date">
                    <input type="text" class="bogeinOfsession" placeholder="Enter begin of Session" v-model="movie.beginOfsession">
                    <input type="text" class="duration" placeholder="Enter Movie Duraton" v-model="movie.duration">
                
                    <textarea class="discription" placeholder="Enter Movie Discription" v-model="movie.discription"></textarea>
                    <div class="add-movie-btn" v-on:click="addMovie">Add movie</div>
                </div>

            </div>
        </div>

        <div class="table-box">

            <div class="bg" style="background-color: #9ba4b4"></div>

            <div class="table">
                
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Duration</th>
                            <th>Premiere</th>
                            <th>Time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                
                    <tbody class="session-info">
                        <tr v-for="(item, index) in movies" :key="index">
                           <td>{{index + 1}}</td> 
                           <td>{{item.title}}</td> 
                           <td>{{item.genre}}</td> 
                           <td>{{item.duration}}</td> 
                           <td>{{item.date}}</td> 
                           <td>{{item.beginOfsession}}</td> 
                           <td>{{item.price}}</td> 
                           <td class="close" v-on:click="deleteMovie(item.title)"><i class="fas fa-trash-alt"></i></td> 
                           <td class="whrite" v-on:click="openModal(item)"><i class="fas fa-edit"></i></td> 
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>

        <div class="modal-wrapper" :class="{'active': isModalOpen}">
            <div class="overlay" v-on:click="closeModal"></div>
            <div class="modal-box">
                <input type="text" class="edit-genre" placeholder="Enter Genre" v-model="genreQuery">
                <input type="text" class="edit-price" placeholder="Enter Price" v-model="priceQuery">
                <input type="text" class="edit-poster" placeholder="Enter Poster http:" v-model="posterQuery">
                <input type="text" class="edit-duration" placeholder="Enter Movie Duraton" v-model="durationQuery">
                <input type="text" class="time" placeholder="Enter begin of session" v-model="beginOfsessionQuery">
                
                <div class="btn" v-on:click="closeModal">Edit Info</div>
                
            </div>
        </div>
    </div>


</template>


<script>
   
    module.exports = {
        
        data: function () {
            
            return{
                isModalOpen: false,
                titleQuery: '',
                genreQuery: '',
                posterQuery: '',
                dateQuery: '',
                durationQuery: '',
                priceQuery: '',
                discriptionQuery: '',
                beginOfsessionQuery: '',
                selectedMovie: '',
                movie: {
                    title: '',
                    genre: '',
                    poster: '',
                    date: '',
                    beginOfsession: '',
                    price: '',
                    discription: '',
                    duration: '',
                    places: {
                        '1': [
                            {place: 1, isReserved: false},
                            {place: 2, isReserved: false},
                            {place: 3, isReserved: false},
                            {place: 4, isReserved: false},
                            {place: 5, isReserved: false},
                        ],
                        '2': [
                            {place: 1, isReserved: false},
                            {place: 2, isReserved: false},
                            {place: 3, isReserved: false},
                            {place: 4, isReserved: false},
                            {place: 5, isReserved: false},
                        ],
                        '3': [
                            {place: 1, isReserved: false},
                            {place: 2, isReserved: false},
                            {place: 3, isReserved: false},
                            {place: 4, isReserved: false},
                            {place: 5, isReserved: false},
                        ],
                        '4': [
                            {place: 1, isReserved: false},
                            {place: 2, isReserved: false},
                            {place: 3, isReserved: false},
                            {place: 4, isReserved: false},
                            {place: 5, isReserved: false},
                        ],
                        '5': [
                            {place: 1, isReserved: false},
                            {place: 2, isReserved: false},
                            {place: 3, isReserved: false},
                            {place: 4, isReserved: false},
                            {place: 5, isReserved: false},
                        ],
                    }
                        
                },
                
            }
        },
        methods: {
            addMovie: function(){
                this.$store.dispatch('setMovie', this.movie);
            },

            deleteMovie: function(item) {
                this.$store.dispatch('deleteMovie', item);
            },

            openModal: function(item) {
                this.isModalOpen = true;
                this.titleQuery = item.title;
                this.genreQuery = item.genre;
                this.posterQuery = item.poster;
                this.dateQuery = item.date;
                this.durationQuery = item.duration;
                this.priceQuery = item.price;
                this.beginOfsessionQuery = item.beginOfsession;
                this.discriptionQuery = item.discription;

                this.selectedMovie = item;
                
            },

            closeModal: function() {
                
                this.selectedMovie.genre = this.genreQuery;
                this.selectedMovie.poster = this.posterQuery;
                this.selectedMovie.data = this.dateQuery;
                this.selectedMovie.duration = this.durationQuery;
                this.selectedMovie.price = this.priceQuery;
                this.selectedMovie.beginOfsession = this.beginOfsessionQuery;
                this.selectedMovie.discriptionQuery = this.discriptionQuery;
                this.$store.dispatch('editMovie', this.selectedMovie);
                this.isModalOpen = false;
            },
        },
        
        computed:{
            movies: function() {
                return this.$store.getters['movies'];  
                
            },

            // isLogedIn: function() {
            //     return this.$store.getters['isLogedIn'];
            // }
        },

    }
</script>

