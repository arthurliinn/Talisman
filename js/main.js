//topSlider

setInterval("sliderSlide()",100);
//setInterval("t()",50);
var move = 0;

function sliderSlide() {
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
    
       var sliderImg = document.getElementsByClassName("topImg");
       move-=1;

       for(var i =0; i<7; i++){
        sliderImg[i].style.transform = "translateX("+move+"px)";
        
        if(sliderImg[i].offsetLeft == -500){
            console.log("bang");
            
            //sliderImg[i].style.transform = "translateX("+sliderImg[i+(7-i)].offsetLeft+500"px)";
        };
       };
       console.log(sliderImg[1].clientWidth);

};


