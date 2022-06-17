$(document).ready(function(){
    let depth1Height = $('nav > ul > li');
    let header = $('header');
    let headerHeight = $('header').outerHeight();

    depth1Height.mouseenter(function(){
        let depth2Height = $(this).find('ul').outerHeight();
        $('header').stop().animate({height: headerHeight + depth2Height + 'px'}, 500);
    }).mouseleave(function(){
        $('header').animate({height: headerHeight + 'px'}, 500);
    });


});