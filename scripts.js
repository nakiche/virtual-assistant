$(document).ready(main);
 
var contador = 1;
 
function main(){
  $('.menu_bar').click(function(){
    
 
    if(contador == 1){
      $('.menu2').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('.menu2').animate({
        left: '-100%'
      });
    }
 
  });
 
};