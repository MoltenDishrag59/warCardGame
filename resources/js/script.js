var player = [];
var computer = [];
var playedCards = [];
var cards = [];
var $player = $("#player");
var $playerNumber = $("#playerNumber");
var $playerSuit = $("#playerSuit");
var $computer = $("#computer");
var $computerNumber = $("#computernumber");
var $computerSuit = $("#computerSuit");
var $draw = $("#draw");
var $winner = $("#winner");
var $playerCards = $("#playerCards");
var $computerCards = $("#computerCards");
var number1;
var number2; 
var suit1;
var suit2;
var numberImg1;
var numberImg2;

for (i=1; i<14; i++){
    for (k=1; k<5; k++) {
        var j = [i,k];
    playedCards.push(j);
    console.log(j);
    }
}

cards.shuffle = function() {
    console.log("shuffle");
    var input = this
    for (var i = cards.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex][0];
        var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
        input[randomIndex][1] = input[i][1];
        input[i][0] = itemAtIndex;
        input[i][1] = itemAtSecond;
  }
    return input
}

cards.shuffle();
var half = cards.length/2
for (i=0; i<half; i++) {
    player.push(cards[i]); //For some reason the cards aren't being pushed
    console.log("Cards have been dealt");
}
cards.splice(0, half);
computer = cards;
$playerCards.html(player.length);
$computerCards.html(computer.length);

function assign(){
    if(player.length == 0 || computer.length == 0){
        endgame();
        return;
    }
    $playerSuit.empty();
    $computerSuit.empty();
    var number1=player[0][0];
    var number2=computer[0][0];
    $playerNumber.html(number1);
    $computernumber.html(number2);
    suit1 = player[0][1];
    suit2 = computer[0][1];
    const suits = ['','heart','diamond','club','spade'];
    image1 = `<img src="resources/images/${suits[suit1]}.png"/>`;
    image2 = `<img src="resources/images/${suits[suit2]}.png"/>`;
    if (number1<11){

        for (i=0; i<number1; i++) {
        
        $playerSuit.append(suit1);
        
        };
        
        } else {
        
        if (number1 == 11) {
        numberImg1 = "<img src='resources/images/jack.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);
        }
        
        if (number1 == 12) {
        numberImg1 = "<img src='resources/images/queen.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);    
        }
    
        if (number1 == 13) {
        numberImg1 = "<img src='resources/images/king.png'/>";
        $playerSuit.append(suit1);
        $playerNumber.html(numberImg1);
        }
        }
        if (number2<11){

            for (i=0; i<number2; i++) {
            
            $computerSuit.append(suit2);
            
            };
            
            } else {
            
            if (number2 == 11) {
            numberImg2 = "<img src='resources/images/jack.png'/>";
            $computerSuit.append(suit2);
            $computerNumber.html(numberImg2);
            }
            
            if (number2 == 12) {
            numberImg2 = "<img src='resources/images/queen.png'/>";
            $computerSuit.append(suit2);
            $computerNumber.html(numberImg2);    
            }
        
            if (number2 == 13) {
            numberImg2 = "<img src='resources/images/king.png'/>";
            $computerSuit.append(suit2);
            $computerNumber.html(numberImg2);
            }
            }
    for (i=0; i<number1; i++) {
        $playerSuit.append(suit1);
    };
    for (i=0; i<number2; i++) {
        $computerSuit.append(suit2);
    }

    playedCards.push(player[0]);
    playedCards.push(computer[0]);

    player.splice(0,1);
    computer.splice(0,1);

    console.log("call greater");
    greater();
}

function war(){
    $winner.html("Time for a war!")
    console.log("war");
        for (i=0; i<3; i++){
            playedCards.push(player[0]);
            playedCards.push(computer[0]);
            player.splice(0,1);
            computer.splice(0,1);
        }
        $playerSuit.css("display", "none");
        $computerSuit.css("display", "none");
        numberImg1 = "<img style='height:14rem;' src='resources/images/card.png'/>";
        numberImg2 = "<img style='height:14rem;' src='resources/images/card.png'/>";
        console.log("call greater");
        greater();
}

function greater(){
    console.log("greater");
    console.log("in greater how many played ", playedCards.length);
    if (number1 > number2) {
        $winner.html("Player Wins");
        console.log("player win");
        for (i=0; i<playedCards.length; i++) {
            player.push(playedCards[i])
        }
    } else if (number1 < number2) {
        $winner.html("Computer Wins");
        console.log("player loss");
        for (i=0; i<playedCards.length; i++) {
            computer.push(playedCards[i])
        }
    } else if (number1 == number2) {
        console.log("call war");
        war();
        }
    playedCards = [];
    $playerCards.html(player.length);
    $computerCards.html(computer.length);
}

$draw.on("click", function() {
    console.log("Draw")
    assign();
})

function endgame(){
if(player.length == 0){
    $winner.html("Game over </br> You have no more cards </br> You lose");
    console.log("Player lost the match");
    $playerNumber.html("Lose");
}
if(computer.length == 0){
    $winner.html("Game over </br> Computer has no more cards </br> You win");
    console.log("Player won the match")
    $playerNumber.html("Win");
}
}