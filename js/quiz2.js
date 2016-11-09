// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)
(function($){
})(jQuery);

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!")
})(jQery);


function changeColor() {
	var i;
	var item = document.getElementById("orderedList");
	for(i=0; i < orderedList.length; i++)
	{
		item[i].style.color = "blue";
	}

}

function Goodbye() {
	document.body.innerHTML = "Bye! It's a good time for some mayham";
}

function accordion()
{
		var accordion = document.getElementsByClassName("accordion");
		var i;
		for (i=0; i<accordion.length; i++) {
    		accordion[i].onclick = function(){

  			}
  		}
}