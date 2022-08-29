//$("h1").hide();

// if we want to be specific on the header to remove.
//$("h1#heading1").hide();

// if we want to select by class
//$("h2#heading2").hide();

// to change color we use css method.
//$("p span").css("color", "blue");

// to select the list items
/*$("ul li:first").css("color", "red");
$("ul li:last").css("color", "yellow");
$("ul li:even").css("background-color", "pink");
$("ul li:odd").css("background-color", "gray");

//the types can be used as a selector too
//$(":button").hide();

//to use attribute as a selector
$("[href]").css("color", "#65702");
//if we wanrt to target a particular link
$('a[href="https://yahoo.com"]').css("color", "red");
*/
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

//Effect and animation
$("#btnFadeOut").click(function () {
  $("#box").fadeOut(3000, function () {
    $("#btnFadeOut").text("its gone");
  }); //to call back some action.
});

//for fadeIn
$("#btnFadeIn").click(function () {
  $("#box").fadeIn(3000);
});

//fade togle performs the work of fadein and out
$("#btnFadeTog").click(function () {
  $("#box").fadeToggle(1000);
});

//slide effect
$("#btnSlideDown").click(function () {
  $("#box").slideDown(3000);
});

$("#btnSlideUp").click(function () {
  $("#box").slideUp(3000);
});

$("#btnSlideTog").click(function () {
  $("#box").slideToggle(3000);
});
// this can be stoped o the way given a slide stop function

$("#btnSlideStop").click(function () {
  $("#box").stop();
});

//ANIMATION

$("#moveRight").click(function () {
  $("#box1").animate({
    left: 500,
    width: "300px",
    height: "300px",
    opacity: "0.7",
  });
});

$("#moveLeft").click(function () {
  $("#box1").animate({
    left: 0,
    width: "100px",
    height: "100px",
    opacity: "1",
  });
});
//movearound allows uss to animate multiple times without clicking
$("#moveAround").click(function () {
  const box = $("#box1");
  box.animate({
    left: 300,
  });
  box.animate({
    top: 300,
  });
  box.animate({
    left: 0,
    top: 300,
  });
  box.animate({
    left: 0,
    top: 0,
  });
});

$("h2").css("color", "black");
$("h2").css({
  background: "orange",
  border: "2px solid black",
  textAlign: "center",
});
$("h1").text("great");
$("ul li:first").html("I will kidnap you sir");

$("img").css({
  width: "300px",
  height: "300px",
});

//attr()
//this can be used to change a src attribute
$("img").attr(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Newfoundland_Pine_Marten.jpg",
  ""
);

//vall method
//vall helps us extract the value from the input.
//note that vall stands for value.
//its used to change the value of an input
//it works on things or elements that has value attr

$("input").val("enty string");

//addclass
$("h1").addClass("correct");

$("h3").addClass("wrong");

//toggle class
//produces a strike line on values
$("li").first().toggle("done");

//addevent on jquery
//the three major eventsare
//click(), keypress(), and on()

$("h1").click(function () {
  alert("h1 clicked");
});

$("button").click(function () {
  $(this).css("background", "gray");
});

//keyprss
