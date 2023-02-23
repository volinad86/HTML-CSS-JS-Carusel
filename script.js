let offset = 0 ;  // left offset
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 812; //offset += 812;
    if (offset > 6496) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});