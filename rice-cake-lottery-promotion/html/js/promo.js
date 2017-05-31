$(function(){
	//Hongbao effect - Turn off to make developer tools faster. This one hogs a lot of memory! Just don't forget to turn on in production.
	$(document).snowfall({
		image :"images/food.png", minSize: 20, maxSize: 80, flakeCount: 30, maxSpeed: 1});
	$('.snowfall-flakes').each(function(i, el){
		var src = $(this).attr("src").split(".");
		var randomNumber = Math.floor(Math.random() * 2) + 1;
		var newSrc = src[0] + randomNumber + '.' + src[1];
    $(this).attr("src", newSrc);
	});
});

$(document).on("scroll",function(a){
	var scroller = $("body");
	var scrollLoc = scroller.scrollTop();
	//console.log(a);
	console.log(scroller.scrollTop());

	if (scrollLoc > 500) {
		$(".box-item").css("visibility", "visible")
		.addClass("animated fade-in");
	}
});