$(document).ready(function() {
    $('header').click(function(){
        $('.menu_pop').fadeIn();
        $('.body').addClass('blur');
        $('.menu_pop').click(function(){
            $('.menu_pop').fadeOut();
            $('.body').removeClass('blur');
        })
    });
});
