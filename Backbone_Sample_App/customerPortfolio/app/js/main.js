// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
    waitSeconds: 200,
    deps: ["../scripts/q"],
    callback: function (Q) {
        window.Q = Q;
    },
    paths: {
        jquery: '../scripts/jquery-2.1.0.min',
        underscore: '../scripts/underscore',
        Q: '../scripts/q',
        datajs: '../scripts/datajs-1.1.2',
        backbone: '../scripts/backbone.min',
        templates: '../templates',
        breeze: '../scripts/breeze.debug',
        bootstrap: '../scripts/bootstrap.min',
        typeahead: '../scripts/bootstrap3-typeahead.min',
        text: '../scripts/text',
        menu: 'menu'
    },

    //shims are for 3rd party libraries that have not been written in AMD format.
    //A shim allows Require.js to load non-AMD compatible scripts to define AMD modules 
    //definitions that get created at runtime.    

    //Backbone.js and Underscore.js are both AMD incompatible.
    //To be AMD compatible, a script must declare itself as a 
    //module by calling the define() method if it exists and list it’s dependencies. 
    //Backbone decided to not natively support AMD/Require.js, because it’s creater, 
    //Jeremy Ashkenas, felt it was unnatural to have to change Backbone’s source 
    //code so that it would work in Require.js and other AMD loaders. 

    shim: {
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        'underscore': { exports: '_' },
        //shim for Breeze dependency on q and jquery
        'breeze': { deps: ['jquery'], exports: 'breeze' },
        'common': { exports: 'common' },
        'bootstrap': { deps: ['jquery'], exports: 'bootstrap' },
        'menu': { deps: ['jquery', 'bootstrap'], exports: 'menu' }
    }
});

require(['jquery', 'backbone', 'app', 'menu'], function ($, backbone, App, Menu) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
    Menu.initialize();
});