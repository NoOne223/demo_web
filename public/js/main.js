$(document).ready(function(){
    $('.home-slide').slick({
        dots: true,            
        infinite: true,        
        speed: 500,           
        slidesToShow: 1,       
        slidesToScroll: 1,    
        autoplay: true,
        autoplaySpeed: 2000,  
        arrows: true, 
    });

    $('.product-slide-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slide'
    });
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slide-content',
        dots: true,
        focusOnSelect: true,
    });
})