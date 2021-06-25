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
    .btn-wrapper{
        .btn-group {
            bottom: 0;
            left: 0;
            right: 0;
            position: fixed;
            text-align: center;
            margin-bottom: 40px;
            div {
                display: inline-block;
                a{
                    background-color:   #214252;
                    border-radius: 5px;
                    padding: 12px 20px;
                    margin: 10px;
                    cursor: pointer;
                    color: white;
                    font-size: 14px;

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
