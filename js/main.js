$(document).ready(function() {
    $('header').click(function(){
        $('.menu_pop').fadeIn();
        $('.menu_pop').click(function(){
            $('.menu_pop').fadeOut();
        })
    });
});