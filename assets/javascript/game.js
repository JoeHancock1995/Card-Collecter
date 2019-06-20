$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var userScore = 0;
    function getCardNumber () {
        return (Math.floor(Math.random() * 12 + 1));
    }

    var minimum = 19;
    var maximum = 120;
    var randomNumber;
    function getRandomNumber () {
        return (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
        }

var cardArray = [];
var emperor;
var priestess;
var magician;
var strength;

$(document).ready(function(){
    $(":button");
  });

function setWins() {
    $("#wins").append(wins);
}

function setLosses () {
    $("#losses").append(losses);
}

function setRandomNumber () {
    randomNumber = getRandomNumber();
    $("#randomNumber").append(randomNumber);
}

function setTotalScore() {
    userScore = 0;
    $("#totalScore").append(userScore);

    function setCardNumber() {
        emperor = getCardNumber();
        priestess = getCardNumber();
        magician = getCardNumber();
        strength = getCardNumber();
    
    }
}


});

