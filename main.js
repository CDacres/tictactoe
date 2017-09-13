// Tic Tac Toe
	//Get a grid on the screen
		//Make a div containing 9 divs (display: inline block)
	//When you click on each grid tile, make x and then o appear
		//Function change player
	//After each player has made a move, check to see if someone has won.
	//If winner - display winners message

var player = true;
var arr = [];

$('.square').one('click', function (event) {
	if (player) {
	$(this).toggleClass('playerX');
	player = false;
	var a = parseFloat($(this).html());
	arr[a]='x';
	} else {
	$(this).toggleClass('playerO');
	player = true;
	var a = parseFloat($(this).html());
	arr[a]='o';
	}
});