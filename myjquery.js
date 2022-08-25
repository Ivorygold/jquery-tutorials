//$("h1").hide();

// if we want to be specific on the header to remove.
//$("h1#heading1").hide();

// if we want to select by class
//$("h2#heading2").hide();

// to change color we use css method.
$("p span").css("color", "blue");

// to select the list items
$("ul li:first").css("color", "red");
$("ul li:last").css("color", "yellow");
$("ul li:even").css("background-color", "pink");
$("ul li:odd").css("background-color", "gray");

//the types can be used as a selector too
//$(":button").hide();

//to use attribute as a selector
$("[href]").css("color", "#65702");
//if we wanrt to target a particular link
$('a[href="https://yahoo.com"]').css("color", "red");

//Click event
/*note if you want your want to put your script on the same page
with your doccument, you make sure you inbade $(document).ready(function(){
  block of codes.
})
this will make the js to run only when the web has loaded fully.*/

/*$(".btn1").click(function () {
  alert("button clicked");
}); //their is an error*/

//$(".btn1").on("click", function () {
// $(".Para1.1").hide();
//});

//DOM  MANIPULATION
