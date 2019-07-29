//topslider

$(document).ready(function(){
  
    setInterval("slider()",500);

});

function slider(){
    
    for(var i=0;i<4; i++){
        
        $('.productSlider[i]').fadeOut(2000);
        console.log("go");
    }
    
};