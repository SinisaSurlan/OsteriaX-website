var my=document.getElementsByClassName("nav-close")[0];console.log(my);var bar=document.getElementsByClassName("bar")[0],nav=document.getElementsByTagName("NAV")[0],navItem=document.getElementsByClassName("nav-item")[0];bar.addEventListener("click",function(){"showNav"!==nav.getAttribute("id")?(nav.setAttribute("id","showNav"),my.setAttribute("id","show-nav")):(nav.removeAttribute("id"),my.removeAttribute("id")),nav.addEventListener("click",function(){nav.removeAttribute("id"),my.removeAttribute("id")}),my.addEventListener("click",function(){nav.removeAttribute("id"),my.removeAttribute("id")})});var fYear=document.getElementById("footer-year"),date=new Date();fYear.innerHTML+=date.getFullYear();


$(window).on("load", function(){
$(".loader-wrapper").fadeOut('slow');
	});

//common questions
document.getElementById('answer-1').addEventListener('click',function(){




	y = document.getElementsByClassName('answer');
	x = document.getElementsByClassName('answer');
	for (var i = 0; i < x.length; i++) {
	  x[i].removeAttribute('id');
	}
	document.getElementsByClassName('answer-1')[0].setAttribute('id','a-active');

});
document.getElementById('answer-2').addEventListener('click',function(){

	x = document.getElementsByClassName('answer');
	for (var i = 0; i < x.length; i++) {
	  x[i].removeAttribute('id');
	}
	document.getElementsByClassName('answer-2')[0].setAttribute('id','a-active');
});
document.getElementById('answer-3').addEventListener('click',function(){

	x = document.getElementsByClassName('answer');
	
	for (var i = 0; i < x.length; i++) {
	  x[i].removeAttribute('id');
	}
	document.getElementsByClassName('answer-3')[0].setAttribute('id','a-active');
});

//common questions
var myDiv = document.getElementById("myDiv");
var questions = myDiv.getElementsByClassName("question");
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("question-a");
  current[0].className = current[0].className.replace(" question-a", "");
  this.className += " question-a";
  });
}