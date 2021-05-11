$(document).ready(function(){
    $(".banner__slider").slick({
        vertical: true,
        verticalSwiping:true,
        dots: true,
        infinite: false
    });

    $(window).scroll(function() {
 
        const scrollBotton = $(document).height() - ($(window).scrollTop() + $(window).height());

        const dfd = $('.footer').height();
 
        if(scrollBotton < dfd){

            $('#toTop').fadeOut();

        } 

        else if($(this).scrollTop() != 0) {
         
            $('#toTop').fadeIn();
         
        } 
        
        else {
         
        $('#toTop').fadeOut();
         
        }
         
        });
         
});