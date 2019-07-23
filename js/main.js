//topSlider

/*setInterval("sliderSlide()",100);
//setInterval("t()",50);
var move = 0;

function sliderSlide() {*/
    //console.log("test");
    
   /* move-=1;
    var slider = document.getElementById("topSlider");
    slider.style.transform = "translateX("+move+"px)";
    console.log(move);

    var sliderImg = document.getElementsByClassName("topImg");
    console.log(sliderImg);

    if(move == -500){
        SliderImg[0].style.transform = "translateX(2000px)"
       console.log(text);
       console.log(SliderImg[0].offsetLeft);
       };*/
    
      /* var sliderImg = document.getElementsByClassName("topImg");
       move-=10;

       for(var i =0; i<7; i++){
        sliderImg[i].style.transform = "translateX("+move+"px)";
        
        if(move == (-500)-(500*i)){
            console.log("bang");
            
            sliderImg[i].style.transform = "translateX(3000px)";
        };
       };
       

};

*/

$(document).ready(function(){

    setTimeout(move(), 2000);
    console.log("11")
});


function move(){
   // $(".topImg").animate({ left:"10px"},500);
    console.log("s");
    //$(".topImg").animate({left:"100px"},1000);
};