// Tic Tac Toe
	//Get a grid on the screen
		//Make a div containing 9 divs (display: inline block)
	//When you click on each grid tile, make x and then o appear
		//Function change player
	//After each player has made a move, check to see if someone has won.
	//If winner - display winners message

var player = true;
var arr = [];
var moves = 0;

$('.square').one('click', function (event) {
	if (player) {
	$(this).addClass('playerX');
	$(this).html('X');
	player = false;
	var a = parseFloat($(this).attr('id'));
	arr[a]='x';
	moves++;
	checkWinner(arr);
	$('h2').html('O\'s Turn');
	} else {
	$(this).addClass('playerO');
	$(this).html('O');
	player = true;
	var a = parseFloat($(this).attr('id'));
	arr[a]='o';
	moves ++;
	checkWinner(arr);
	$('h2').html('X\'s Turn');
	}
});

$('#button').click(function (event) {
	clear();
});

function checkWinner(arr) {
	if (arr[0] !== undefined && (arr[0] === arr[1]) && (arr[0] === arr[2])) {
		outputWinner(arr[0]);
	} else if (arr[3] !== undefined && (arr[3] === arr[4]) && (arr[3] === arr[5])) {
		outputWinner(arr[3]);
	} else if (arr[6] !== undefined && (arr[6] === arr[7]) && (arr[6] === arr[8])) {
		outputWinner(arr[6]);
	} else if (arr[0] !== undefined && (arr[0] === arr[3]) && (arr[0] === arr[6])) {
		outputWinner(arr[0]);
	} else if (arr[1] !== undefined && (arr[1] === arr[4]) && (arr[1] === arr[7])) {
		outputWinner(arr[1]);
	} else if (arr[2] !== undefined && (arr[2] === arr[5]) && (arr[2] === arr[8])) {
		outputWinner(arr[2]);
	} else if (arr[2] !== undefined && (arr[2] === arr[5]) && (arr[2] === arr[8])) {
		outputWinner(arr[2]);
	} else if (arr[0] !== undefined && (arr[0] === arr[4]) && (arr[0] === arr[8])) {
		outputWinner(arr[0]);
	} else if (arr[2] !== undefined && (arr[2] === arr[4]) && (arr[2] === arr[6])) {
		outputWinner(arr[2]);
	} else if (moves === 9) {
		outputTie();
	}
}

function outputWinner(index) {
	if (index === 'x') {
		alert('X Wins!');
	}
	else {
		alert('O Wins!');
	}
}

function outputTie(){
	alert('It\'s a tie!')

}

function clear() {
	location.reload();
}