$('.c-btn--sidebar').click(function(){
    $('.l-sidebar, body').addClass('active');
});

$('.c-btn--close').click(function(){
    $('.l-sidebar, body').removeClass('active');
});