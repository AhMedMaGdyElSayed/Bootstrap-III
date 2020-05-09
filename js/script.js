$(document).ready(function(){
    // Adjust slider height
    var windowHeight     = $(window).height(),
        upperHeight      = $('.upper-bar').innerHeight(),
        navbarHeight     = $('.navbar').innerHeight(),
        totalUpperHeight = upperHeight + navbarHeight;
    $('.slider, .carousel-item').height(windowHeight - totalUpperHeight);
    // $('.carousel-inner').height(windowHeight - totalUpperHeight);
    
    // featured work shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            // $('.shuffle-images .col-md').show()
            $('.shuffle-images .col-md-3').css('opacity', '1');
        } else {
            // $('.shuffle-images .col-md').fadeOut(500)
            $('.shuffle-images .col-md-3').css('opacity', '0.09');
            // $('.shuffle-images .col-md-3').fadeOut(500);
            $($(this).data('class')).parent().css('opacity', '1');
            // $($(this).data('class')).parent().fadeIn(500);
        }
    });
});