const Vue = require('vue');
const Vuex = require('vuex');
const firebase = require('firebase/firebase');
const Router = require('./router');
Vue.use(Vuex);
 
firebase.initializeApp({
    apiKey: "AIzaSyDXFkrqNb8uaynnR4uJfBH8ziqBvrUV-l0",
    authDomain: "cinema-a1d35.firebaseapp.com",
    projectId: "cinema-a1d35",
    storageBucket: "cinema-a1d35.appspot.com",
    messagingSenderId: "156400857713",
    appId: "1:156400857713:web:0b03fc9c431796cc86e1d0"
});

const db = firebase.firestore();

module.exports = new Vuex.Store({
    state: {
        movies: [],
        user: {
            uid: '',
            login: '',
            password: '',
        },
        selectedMovie: '',
        emailQuery: '',
        loginFormError: '',
        regFormError: '',
        loginIsAlreadyExist: false,
        invalidLogin: false,
        isLogedIn: false,
        invalidPassword: false,
        isRegFormError: false,
        
    },
    getters: {
        movies: function (state) {
            return state.movies;
        },
        selectedMovie: function (state) {
            return state.selectedMovie;
        },
        isLogedIn: function (state) {
            return state.isLogedIn;
        },
        isAlreadyExist: function (state) {
            return state.loginIsAlreadyExist;
        },
        invalidPassword: function (state) {
            return state.invalidPassword;
        },
        invalidLogin: function (state) {
            return state.invalidLogin;
        },

        getFormState: function (state) {
            return state.ResetFormIsActive;
        }

    },
    mutations: {
        setMovies: function (state, payload) {
            state.movies = payload;
        },
        setIndex: function (state, payload) {
            state.selectedMovie = payload;
        },

    },
    actions: {
        getMovies: function(context) {
            
            let movies = [];
            db.collection('Films').get().then(function (data){
                data.forEach(function(element) {
                    movies.push(element.data());
                   
                    context.commit('setMovies', movies); 
                })
                
            });
        },

        setMovie: function(context, payload) {

            db.collection('Films').doc(payload.title).set({
                title: payload.title,
                genre: payload.genre,
                poster: payload.poster,
                date: payload.date,
                beginOfsession: payload.beginOfsession,
                price: payload.price,
                discription: payload.discription,
                duration: payload.duration,
                places: payload.places,
            });
            
            context.dispatch('getMovies');
            
        },

        editMovie: function (context, payload) {

            db.collection('Films').doc(payload.title).set({
                title: payload.title,
                genre: payload.genre,
                poster: payload.poster,
                date: payload.date,
                beginOfsession: payload.beginOfsession,
                price: payload.price,
                discription: payload.discription,
                duration: payload.duration,
                places: payload.places
            });

        },

        deleteMovie: function(context, payload) {
            db.collection('Films').doc(payload).delete().then(() => {
                context.dispatch('getMovies', payload)
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            
        },


        login: function(context, user) {

            db.collection('users').doc(user.login).get().then(function (data) {

                let info = data.data();

                if(info){
                    context.state.invalidLogin = false;
                    if(info.password == user.password){
                        context.state.invalidPassword = false;
                        context.state.isLogedIn = true;

                        if(info.role == 'client') {
                            Router.push({name: 'client'});

                        } else if(info.role == 'admin') {
                            Router.push({name: 'admin'});
                        }

                        localStorage.setItem('user', JSON.stringify({
                            login: user.login,
                            password: user.password,     
                        }))


                        context.state.user.info;
                        
                    } else {
                        context.state.invalidPassword = true;
                    }
                } else {
                    context.state.invalidLogin = true;
                }
                
                
            })

            
        },
        logout: function(context) {
            context.state.isLogedIn = false;
            localStorage.removeItem('user');
            
           
        },
        registration: function(context, payload) {
            db.collection('users').doc(payload.login).get()
            .then(function(doc){
                if(doc.data()){
                    context.state.loginIsAlreadyExist = true
                } else {
                    let newUser = {
                        login: payload.login,
                        password: payload.password,
                        role: 'client'
                    };
                    db.collection('users').doc(payload.login).set(newUser)
                    .then(function(){
                        context.dispatch('login', newUser)
                    });
                    context.state.loginIsAlreadyExist = false;
                    
                }
            })
            
        },

        userStatus: function (context) {
            firebase.auth().onAuthStateChanged(function (user) {
                
                if (user) {
                    context.state.isLogedIn = true;
                } else {

                    context.state.isLogedIn = false;
                    
                }
                
            });
            
        },


    }

});
