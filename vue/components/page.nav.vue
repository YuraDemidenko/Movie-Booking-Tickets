<template>
    <div class="btn-wrapper">
        <div class="btn-group">
            <div><router-link :to="{name: 'admin'}">Admin Page</router-link></div>
            <div><router-link :to="{name: 'client'}">Client Page</router-link></div>
            <div><a @click="logout">Logout</a></div>
        </div>
    </div>
</template>

<style lang="less">

    @primary-font: 'Saira Extra Condensed', sans-serif;
    .btn-wrapper{
        .btn-group {
            bottom: 0;
            right: 200px;
            position: fixed;
            z-index: 30;
            text-align: center;
            margin-bottom: 40px;
            background-color: transparent;
            div {
                display: inline-block;
                a {
                    background: #A55EEA;
                    padding: 5px 52px;
                    border: none;
                    border-radius: 10px;
                    font-family: @primary-font;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 31px;
                    letter-spacing: 0.02em;
                    color: #FFFFFF;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    cursor: pointer;
                }
            }
            
        }
    }

</style>

<script>
    module.exports = {
        data: function () {
            return {
                
            }
        },

        methods: {

            logout: function() {
                this.$store.dispatch('logout');

            },

        }
    }   
</script> 
