$(document).ready(function(){
//    sticky navbar
$('.js--services-section').waypoint(function(direction){
   if(direction == "down"){
       $('nav').addClass('sticky');
      
   }else{
       $('nav').removeClass('sticky');
   }
})
})
var config = document.querySelector('.img-filter');
var mixer = mixitup(config);

