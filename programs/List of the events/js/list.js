
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	// use "this" and "parent", in order to remove li
	$(this).parent().fadeOut(500, function() {
		// when it's done
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){ 
	// check for "enter" ky, which is 13
	if (event.which === 13) {
		// grabbing new todo text from input
		var listText = ($(this).val());
		// this acts as a "setter"
		$(this).val("");
		// create new li and add to ul (to do this, we need to use a new method called ".append()"
		// then clear the input, so the text goes away
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + listText + "</li>");
	};
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});











