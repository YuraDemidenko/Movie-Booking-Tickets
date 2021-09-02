<template>
    <div class="global-wrapper">
        <login-page v-if="!isLogedIn"></login-page>
        
        <router-view></router-view>

        <page-nav></page-nav>
    </div>
</template>

<style lang="less">
    
</style>


<script>

    module.exports = {
        data: function () {
            return{

            }
        },
        components: {
            'page-nav': require('./components/page-nav.vue'),
            'login-page': require('./components/login-page.vue'),

        },
        
        computed: {

            isLogedIn: function() {
                return this.$store.getters['isLogedIn'];
            },

        },

        mounted: function() {
            if(localStorage.getItem('user')){
                this.$store.dispatch('login', JSON.parse(localStorage.getItem('user')));
            }


        },

        created: function () {
            this.$store.dispatch('getMovies');
            this.$store.dispatch('userStatus');

        }           

        
    }
</script>
