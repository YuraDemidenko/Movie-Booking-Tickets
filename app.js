let Vue = require('vue');

new Vue({
    el: '#app',
    router: require('./router.js'),
    store: require('./store.js'),
    render: function (init) {
        return init(require('./../../vue/index.vue'));
    }
});
