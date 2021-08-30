<template>
    <div class="ticket-page">

        <div class="ticket-page-bg">
            <img :src="movie.poster">
            <div class="ticket-page-overlay"></div>
        </div>
      
        <div class="session-info-box">
            <div class="movies-info">
                <div class="movie-poster-wrapper">
                    <div class="session-poster">
                        <img :src="movie.poster">
                    </div>
                    <div class="session-info">
                        <div class="movie-title">
                            <p>{{movie.title}}</p>
                        </div>
                        <div class="movie-genre">
                            <p>{{'Genre:  ' + movie.genre}}</p>
                        </div>
                        <div class="movie-duration">
                            <p>{{'Duration:  ' + movie.duration}}</p>
                        </div>
                        <div class="movie-ticket-price">
                            <p>{{'Price:  ' + movie.price}}</p>
                        </div>
                        <div class="movie-begining">
                            <p>{{'Begin Of Session:  ' + movie.beginOfsession}}</p>
                        </div>
                    </div>
                </div>
                <div class="movie-discription">
                    <p>{{movie.discription}}</p>
                </div>

                <div class="places-box">
                   <div class="screen"></div>


                    <div class="places-scheme">

                        <div class="row" v-for="(row, index) in movie.places" :key="index">
                            <div class="row-number">{{'Ряд    ' + index}}</div>
                            <div class="place" :class="{'isReserved': place.isReserved}" v-for="(place, index) in row" :key="index" @click="getPlace(place)">
                                <div class="place-number" :class="{'active': place.isReserved}">{{place.place}}</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="place-info-box">
                    <div class="place-status">
                        <div class="color-anotation">
                            <span class="round" style="background: #A55EEA"></span>
                            <h3>Место свободно</h3>
                        </div>
                        <div class="color-anotation">
                            <span class="round" style="background: #4CD137"></span>
                            <h3>Вы выбрали это место </h3>
                        </div>
                        <!-- <div class="color-anotation">
                            <span class="round" style="background: #383838"></span>
                            <h3>Место занято</h3>
                        </div> -->
                    </div>

                    <div class="bought-tickets">
                        <div class="basket-box">
                            <div class="basket-title">Мои билеты</div>
                            <div class="total-summ">
                                <!-- <div class="summ-title">Итого: 200грн</div> -->
                                <div class="summ-title">Will see you in Theatre</div>
                                <button class="buy-btn" @click="buyTicket">Buy Ticket</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
        
    </div>
</template>


<script>
    module.exports = {
        data: function() {
            
            return{
                ticket: '',
                ticketPlace: '',
                ticketRow: '',
            }
        },

        methods: {
            getPlace: function(place) {
                place.isReserved = !place.isReserved;
            },

            buyTicket: function() {
                // this.$router.push({name: 'client'});

                console.log(this.movie.price);
            }
        },
        

        computed: {

            movie: function() {
                return this.$store.getters['selectedMovie'];
            },
            // movies: function() {
            //     return this.$store.getters['movies'];
            // },

        },
        
        
    }
</script>
