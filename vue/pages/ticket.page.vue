<template>
    <div class="ticket-box">

        <div class="promo-container">

            <div class="promo-ticket-wrapper">

                <div class="discription">

                    <div class="poster">
                        <img :src="movies[index].poster">
                    </div>

                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>{{'Title: ' + movies[index].title}}</td>
                            </tr>
                            <tr>
                                <td>{{'Genre: ' + movies[index].genre}}</td>
                            </tr>
                            <tr>
                                <td>{{'Duration: ' + movies[index].duration + ' min'}}</td>
                            </tr>
                            <tr>
                                <td>{{'Ticket Price: ' + movies[index].price}}</td>
                            </tr>
                            <tr>
                                <td>{{'Begin of Session: ' + movies[index].beginOfsession}}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                <div class="about-movie">
                    <div class="movie-discription">{{movies[index].discription}}</div>  
                </div>

                <div class="hall-scheme">
                    <div class="screen"></div>
                    <table>
                        <tbody>
                            <tr v-for="(item, index) in this.movies[this.index].places" :key="index">
                                <td class="place" :class="{'active': item.isReserved}" v-for="(item, index) 
                                in item" :key="index"  v-on:click="getPlace(item)">{{index + 1}}</td>  
                            </tr> 
                        </tbody>
                    </table>
                    <div class="buy-ticket-btn" v-on:click='buyTicket'>Buy Ticket</div>
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
                ticketRow: ''
            }
        },

        methods: {
            getPlace: function(item) {
                item.isReserved = !item.isReserved;
            },

            buyTicket: function() {
                this.$router.push({name: 'client'});
            }
        },
        

        computed: {
            index: function() {
                return this.$store.getters['selectedMovie'];
            },
            movies: function() {
                return this.$store.getters['movies'];
            }
        },
        
        
    }
</script>
