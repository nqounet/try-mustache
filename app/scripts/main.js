jQuery(function($, undefined){
    var init = function(){
        console.debug('init');
        $.get('templates/init.mst', function(template){
            var rendered = Mustache.render(template, {name: "nqounet"});
            console.info(rendered);
        });
    };
    init();
});
