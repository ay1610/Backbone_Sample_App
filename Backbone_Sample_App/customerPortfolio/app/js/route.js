var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();
router.on('route:home', function() {
    console.log("Home page is loaded")
});
Backbone.history.start();
