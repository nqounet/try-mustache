/*
# Apply.js

try apply syntax.

@main apply.js
**/

jQuery(function($, undefined){
    'use strict';
    var eventHoge = function(e){
        var args = Array.prototype.slice.apply(e.data);
        hoge.apply(this, args);
    },
    hoge = function(foo, bar){
        console.debug('hoge arguments:', arguments);
        console.debug('foo:', foo);
        console.debug('bar:', bar);
    },
    init = function(foo, bar){
        console.debug('init arguments:', arguments);
        hoge(foo, bar);
        $(window).one('hoge', arguments, eventHoge);
        $(window).triggerHandler('hoge');
    };
    init('foo', 'bar');


    var array = [1,2,3,4,5];
    var func = function(a, b, c, d, e){ console.debug(a + b + c + d + e); };

    func.apply(func, array);


    var eventOnLoad = function(e){
        console.debug('data:', e.data);
    };
    $(window).on('load', {foo: 'bar'}, eventOnLoad);

});
