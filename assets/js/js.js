//navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//slider
var slideIndexx = 1;
showSlidess(slideIndexx);

// Thumbnail image controls
function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndexx-1].style.display = "block";
  dots[slideIndexx-1].className += " dot-active";
}
//modal

var slideIndex=1;
function plusSlides(e){
  showSlides(slideIndex+=e)
}
function currentSlide(e){
  showSlides(slideIndex=e)
}function showSlides(e){
  var t,n=document.getElementsByClassName("modal-hiden");
  document.getElementsByClassName("demo"),
  document.getElementById("caption");
  for(e>n.length&&(slideIndex=1)
    ,e<1&&(slideIndex=n.length)
    ,t=0;t<n.length;t++)n[t].style.display="none";
    n[slideIndex-1].style.display="block";
}
showSlides(slideIndex);
for(var modal=document.getElementById("myModal"),
  modalContent=document.getElementById("modal-content"),
  items=document.getElementsByClassName("box"),
  i=0;i<items.length;i++){
  var box=document.getElementsByClassName("box")[i];
    box.addEventListener&&(box.addEventListener("click",function(){
    modal.style.display="block"
  }),
    box.addEventListener("mouseover",function(){}))}
    var span=document.getElementsByClassName("close")[0];
    span.onclick=function(){modal.style.display="none"},
    window.onclick=function(e){e.target==modal&&(modal.style.display="none")};