$(document).ready(function () {
    
$('.menu_bar').click(function(){
    $('nav').animate({
      top: '0',
      transition: '.7s'
    }); 
  });
      
  $('li').click(function(){
    $('nav').animate({
      top: '-120%'
    });
  });
  $('section').click(function(){
    $('nav').animate({
      top: '-120%'
    });
  });
}); 