let Vue = require('vue');
let VueRouter = require('vue-router');

Vue.use(VueRouter);

let routes = [
    {
        name: 'admin',
        path: '/',
        component: require('./../../vue/pages/admin-page.vue'),
        
    },
    
    {
        name: 'client',
        path: '/client-page',
        component: require('./../../vue/pages/client-page.vue')
    },
   
    { 
        name: 'ticket-page',
        path: '/ticket-page',      
        component: require('./../../vue/pages/ticket-page.vue')
    },
]

module.exports = new VueRouter({
    // mode: 'history',
    routes: routes,
    
});
