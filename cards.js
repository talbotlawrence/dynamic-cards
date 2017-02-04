"use strict";
// When the user enters in text into the text area and then clicks the create button, 
//create a new card element in the DOM that includes it's own delete button. 
//You decide the height/width of the card.

var output = document.getElementById("showMe");

var myCreate = document.getElementById("create");
myCreate.addEventListener("click", function() {
  var myAreaInput = document.getElementById("area").value;
  createCard(myAreaInput);  
});

//create and display the card in HTML
function createCard(input) {					
	// var output = document.getElementById("showMe");
		output.innerHTML += `
	  	<section class="mySection">
		<h2>Your Card Input: </h2>
		<h3>${input}</h3>
		<div id="deleteCenter">
		<button type="Reset" class="buttonDelete">Delete</button>
		</div>
		</section>
	 	`
};

// When the user clicks the Delete button, the containing card, and no other cards, 
//should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

output.addEventListener("click", function(event){
	console.log("event is: ", event);
	console.log("event target is: ", event.target);
	console.log("event target class name is: ", event.target.className);
	if (event.target.className === "buttonDelete") {
		event.target.parentNode.parentNode.remove();
	}
});

//I had trouble with the delete button.  Found the answer online.
//I need to learn when to use () and when to use (event)
//I need to get comfortable using event.target