$(document).ready(function(){
  

$('.single-item').slick({
    
dots: false,
arrows: false,  
fade: true,
autoplay: true,    
infinite: true,
pauseOnHover: false,  
vertical: false,  
autoplaySpeed: 6000,
speed: 2000,
slidesToShow: 1,
    
slidesToScroll: 1
  });
  
 



  

$(window).on('scroll', function(){
    
if($(window).scrollTop() > 166) {
        
$('.fixed-header').show();
    
} else {
        
$('.fixed-header').hide();
    }
  });

  

$('ul.nav a').on('click', function(event){
    
event.preventDefault();
    
var targetID = $(this).attr('href');
    
var targetST = $(targetID).offset().top - 48;
    
$('body').animate({
      
scrollTop: targetST + 'px'
    
}, 300);
  });

});