var my=document.getElementsByClassName("nav-close")[0];console.log(my);var bar=document.getElementsByClassName("bar")[0],nav=document.getElementsByTagName("NAV")[0],navItem=document.getElementsByClassName("nav-item")[0];bar.addEventListener("click",function(){"showNav"!==nav.getAttribute("id")?(nav.setAttribute("id","showNav"),my.setAttribute("id","show-nav")):(nav.removeAttribute("id"),my.removeAttribute("id")),nav.addEventListener("click",function(){nav.removeAttribute("id"),my.removeAttribute("id")}),my.addEventListener("click",function(){nav.removeAttribute("id"),my.removeAttribute("id")})});var fYear=document.getElementById("footer-year"),date=new Date();fYear.innerHTML+=date.getFullYear();
$(window).on("load", function(){
$(".loader-wrapper").fadeOut('slow');
	});