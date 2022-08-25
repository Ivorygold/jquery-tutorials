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
