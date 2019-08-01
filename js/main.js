//topslider

$(document).ready(function(){
  
    setInterval("slider()",5000);
    

});
var n = 0;

function slider(){
    
    
   if(n == 0){
       $('#highTempProduct').fadeOut(1500);
       n++
   }else if(n == 1){
       $('#skipSlitTap').fadeOut(1500);
       n++
   }else if(n == 2){
       $('#label').fadeOut(1500);
       n++
   }else if(n == 3){
       $('#converting').fadeOut(1500);
       $('#highTempProduct').fadeIn(1500);
       $('#skipSlitTap').fadeIn(1500);
       $('#label').fadeIn(1500);
       setTimeout(function(){
        n = 0
        $('#converting').fadeIn();
       },5000);
   }
    
    console.log(n);
    
   
    
};

//navscroll

$('#btn_products').mouseover(function(){
        $('#products').css("height","321.56px");
    });
$('#btn_products').mouseout(function(){
        $('#products').css("height","0px");
    });

 $('#products').mouseover(function(){
        $('#products').css("height","321.56px");
    });

$('#products').mouseout(function(){
    $('#products').css("height","0px");
});

$('#products li').mouseout(function(){
    $('#products').css("height","0px");
});
        
   




    