
var keys = { esc: 27, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};

$(document).ready(function() {

$('[data-toggle="tooltip"]').tooltip();
 handleKeyDown();

});// documentready.

function handleKeyDown(){

$(document).keydown(function(event){

switch(event.which){
case keys.esc:

var buttonExpanded = $('button[aria-expanded="true"]');
var divExpanded = $('div[class="collapse show"]');

buttonExpanded.attr('aria-expanded', 'false');
divExpanded.attr('class', 'collapse');

takeFocus(buttonExpanded);

break;

case keys.end:

 var lastButton = $('#accordion button').last();
 takeFocus(lastButton);

break;

case keys.home:

var firstButton = $('#accordion button').first();
 takeFocus(firstButton);

break;

case keys.right:

var FocusedButton = $('#accordion button:focus');
 var nextButton = FocusedButton .closest('div[class="card"]').next().find('button');
takeFocus(nextButton);

break;

case keys.down:

var FocusedButton = $('#accordion button:focus');
 var nextButton = FocusedButton .closest('div[class="card"]').next().find('button');
takeFocus(nextButton);

break;

case keys.left:

var FocusedButton = $('#accordion button:focus');
 var prevButton = FocusedButton .closest('div[class="card"]').prev().find('button');
takeFocus(prevButton);

break;

case keys.up:
var FocusedButton = $('#accordion button:focus');
 var prevButton = FocusedButton .closest('div[class="card"]').prev().find('button');
takeFocus(prevButton);

break;

}// end switch.
}); // end keydown.

}// end handleKeyDown.

function takeFocus(jqueryObject){

jqueryObject.blur();
jqueryObject.focus();

}// end takeFocus.
