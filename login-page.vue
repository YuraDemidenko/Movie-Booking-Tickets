<template >
    <div class="login-wrapper" v-if="!isLogedIn">
        
        <div class="bg"></div>

        <transition name="slide">
            <div class="login-box" v-if="!isRegistrated">
                <h2 class="login-title">Login</h2>
                <p class="err-msg" v-if="invalidLogin">Invalid Login</p>
                <p class="err-msg" v-if="invalidPassword">Invalid Password</p>
                <div class="form">
                    <div class="form-field" :class="{'error': emptyLoginForm && !user.login.length}">
                        <input type="email" placeholder="Enter Your Email" v-model="user.login">
                    </div>
                    <div class="form-field" :class="{'error': emptyLoginForm && !user.password.length}">
                        <input type="password" placeholder="Enter Your Password" v-model="user.password">
                    </div>
                    <div class="actions">
                        <a class="form-link" @click="isRegistrated = true">Haven't an account? Just Register</a>
                        <button class="btn" @click="login">Login</button>
                        <!-- <button class="btn" @click="resetPassword">Reset</button> -->
                    </div>
                </div>  
            </div>
        </transition>

        <transition name="slide">
            <div class="login-box" v-if="isRegistrated">
                <h2 class="login-title">Registration</h2>
                <p class="err-msg" v-if="loginIsAlreadyExist">Login is already exist</p>
                <div class="form">
                    <div class="form-field" :class="{'error': emptyRegForm && !reg.login.length}">
                        <input type="email" placeholder="Enter Your Email" v-model="reg.login">
                    </div>
                    <div class="form-field" :class="{'error': emptyRegForm && !reg.login.length}">
                        <input type="password" placeholder="Enter Your Password" v-model="reg.password">
                    </div>
                    <div class="actions">
                        <a class="form-link" @click="isRegistrated = false">Back to login</a>
                        <button class="btn" @click="registration()">Registration</button>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<style lang="less">

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
        opacity: 1;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }

</style>

<script>
    module.exports = {
        data: function () {
            return{
                isRegistrated: false,
                emptyLoginForm: false,
                emptyRegForm: false,
                resetForm: false,
                user: {
                    login: '',
                    password: ''
                },
                reg: {
                    login: '',
                    password: ''
                }
            }
        },
        computed: {
            invalidLogin: function() {
                return this.$store.getters['invalidLogin']
            },
            invalidPassword: function() {
                return this.$store.getters['invalidPassword']
            },

            loginIsAlreadyExist: function() {
                return this.$store.getters['isAlreadyExist']
            },

            isLogedIn: function() {
                return this.$store.getters['isLogedIn'];
            }

        },

        methods: {
            login: function() {
                if(this.user.login.length && this.user.password.length){
                    
                    this.$store.dispatch('login', this.user);
                } else {
                    this.emptyLoginForm = true;
                }

            
            },

            registration: function() {
                if(this.reg.login.length && this.reg.password.length){
                    this.$store.dispatch('registration', this.reg)
                    
                } else {
                    this.emptyRegForm = true;
                    
                }
            },

            resetPassword: function () {
                this.resetForm = true;

                if(this.resetForm) {
                    this.isRegistrated = false;
                }


            }
        }
        
    }
</script>