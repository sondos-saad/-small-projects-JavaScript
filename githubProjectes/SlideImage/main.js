
let SliderIndex = 1
Sliders(SliderIndex )
function arrowSlider(n){
    Sliders(SliderIndex +=n)
}


function Sliders(indx){
    let itemSlider = document.getElementsByClassName('slider-item');
    if(indx > itemSlider.length){
        SliderIndex = 1;
    }
    if(indx < 1){
        SliderIndex = itemSlider.length;
    }
    for(let i = 0; i < itemSlider.length; i++){
        itemSlider[i].style.display = 'none'
    }
    itemSlider[SliderIndex-1].style.display ="block";
}

