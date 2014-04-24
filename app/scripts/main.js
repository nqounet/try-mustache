'use strict';

jQuery(function($, undefined){
    var DEBUG = 1,
    lscache,
    Mustache,
    $runButtons,
    generateKeyFromPath = function(path){
        return 'fetched:' + path;
    },
    fetchTemplate = function(path, $cb){
        var key = generateKeyFromPath(path);
        $.get(path, function(template){
            console.debug('run $.get');
            lscache.set(key, template, 1);
            return $cb.fire(template);
        });
    },
    getTemplate = function(path, $cb){
        var key = generateKeyFromPath(path);
        var template = lscache.get(key);
        if (template) {
            return $cb.fire(template);
        }
        else {
            fetchTemplate(path, $cb);
        }
    },
    render = function(targetId, targetName){
        var obj = {
            id: targetId,
            name: targetName
        };
        var $cb = $.Callbacks();
        $cb.add(function(template){
            var rendered = Mustache.render(template, obj);
            $('#' + targetId).html(rendered);
        });
        getTemplate('templates/init.mst', $cb);
    },
    changeName = function(e){
        var $this = $(e.currentTarget);
        render($this.data('id'), $this.html());
    },
    setVars = function(){
        lscache = window.lscache;
        Mustache = window.Mustache;
        $runButtons = $('button[data-run=changeName]');
    },
    initHandlers = function(){
        $runButtons.on('click', changeName);
    },
    init = function(){
        setVars();
        initHandlers();
        if (DEBUG) {
            lscache.flush();
        }
    };
    init();
});
