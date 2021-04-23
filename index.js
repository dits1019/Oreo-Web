$(document).scroll(function () {
    var sc = $(this).scrollTop(); //현재 스크롤의 위치를 sc에 넣어라
    var scrollimg = $("#intro").height(); //.intro에 위치를 scrollimg에 넣어라

    if (sc <= scrollimg) {
        $("#intro .img_oreo").css("opacity", 0);
    } else {
        $("#intro .img_oreo").css("opacity", 1);
    }
});

function scrollmovebtn(btn){
jQuery(document).ready(function ($) {
    $(btn).click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});
}

scrollmovebtn("li .btn_intro");
scrollmovebtn("li .btn_kind");
scrollmovebtn("li .btn_enjoy");



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


$(function(){
    $('.in_the_milk').click(function(){
       $('.in_the_milk').css("z-index", 4);
       $('.in_the_milk').css("margin-top", -110);
       $('.in_the_milk').css("opacity", 0)
       $('.milk_p').css("opacity", 1)
    });
});

