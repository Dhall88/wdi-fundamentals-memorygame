//creates the cards to be used and stores
//information about each.
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}	];

//Empty array that will hold active cards
//should never be more than two elements
var cardsInPlay = [];

//Checks to see if there is a match
function checkForMatch(){
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
  		alert("You found a match!");
	} 	
	else {
  		alert("Sorry, try again.");
	}
}
//flips card visually as well as
//well as logs to console for error checking
function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
	checkForMatch();
	}
}

//creates a board of four cards
//shows the back of the cards prior to clicking
function createBoard(){
	for(var i=0; i<cards.length; i++){
		console.log("loop iteration");
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click',flipCard);
		console.log(cardElement.getAttribute('data-id'));
		document.getElementById('game-board').appendChild(cardElement);
		
	}

	createBoard();




