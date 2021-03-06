/*
1. randomly generate a number (crystal1Number, crystal2Number, crystal3Number, crystal4Number) between 1 and 12 for each of the four crystals
2. randomly generate a number(matchThisNumber) between 19 and 120 for the user to match
3. have totalScore that adds each crystal clicked to it.
match totalScore with matchNumber.  
    if it's less, allow user to continue clicking crystals
    if it's more, game over and Losses counter increases by 1
    if it's the same, game over and Wins counter increases by 1
Once game is over, reset totalScore and generate a new matchNumber and number for each crystal.

function for randomly generating crystal numbers √
function for randomly generating matchNumber √
function for resetting totalScore, new matchNumber, and crystal(s)number

main function waits for window to load, then calls resetscore function, then randomCrystalNumber function, then random matchNumber function.
setup a loop that allows user to continue clicking on crystals (if score is less, call this function)(if score is more, call this function)(if score is the same, call this function)*/
//function for generating random number between 10 and 100.
var totalScore = 0;
var gamesLost = 0;
var gamesWon = 0;
var matchThisNumber = 0;

// call function to genereate random for all four crystals
var crystalNumber1 = crystalNumberGen();

var crystalNumber2 = crystalNumberGen();

var crystalNumber3 = crystalNumberGen();

var crystalNumber4 = crystalNumberGen();

//function for generating a random number between 19 and 1000
function numberToMatch() {
    var random = Math.floor(Math.random() * (81)) + 19;
    return random;
  }

//function for generating a random number between 1 and 12
function crystalNumberGen() {
    var random = Math.floor(Math.random() * 12) + 1;
    return random;
}

//functiomn for resetting the game after a win or loss
function reset() {
        totalScore = 0;
        matchThisNumber = numberToMatch();
        crystalNumber1 = crystalNumberGen();
        crystalNumber2 = crystalNumberGen();
        crystalNumber3 = crystalNumberGen();
        crystalNumber4 = crystalNumberGen();
        $("#total-score").text(totalScore);
        console.log("Total Score is " + totalScore);
        console.log("Crystal 1 is " + crystalNumber1);
        console.log("Crystal 2 is " + crystalNumber2);
        console.log("Crystal 3 is " + crystalNumber3);
        console.log("Crystal 4 is " + crystalNumber4);
        $("#random-number").text(matchThisNumber);
        console.log("The number to match is " + matchThisNumber);
        return
}

//when a crystal is clicked, this function will add the value of that crystal to the total and display the new total
function addScore(crystalChosen) {
    totalScore = totalScore + crystalChosen;
    $("#total-score").text(totalScore);
    checkScore();
}

//after the total score is updated, this function will check to see if it matches the number to hit, or if it goes over/under.  If it's over or matches, 
//it will trigger the reset function,  else the game continues.
function checkScore() {

    if (totalScore > matchThisNumber) {
        gamesLost = gamesLost + 1;
        $("#gamesLostCounter").text(gamesLost);
        reset();
    }
    if (totalScore === matchThisNumber) {
        gamesWon = gamesWon + 1;
        $("#gamesWonCounter").text(gamesWon);
        reset();
    }
}

//this function listens for the crystals to be licked on and then runs that number through the addscore function
function listenForCrystal() {
    $("#crystal-number-1").on("click", function() {
        addScore(crystalNumber1);
    });

    $("#crystal-number-2").on("click", function() {
        addScore(crystalNumber2);
    });  

    $("#crystal-number-3").on("click", function() {
        addScore(crystalNumber3);
    });

    $("#crystal-number-4").on("click", function() {
        addScore(crystalNumber4);
    });
}

//program starts and waits for the user to press a key.  once they do, it triggers the reset function and then the listen for crystal function
    $("#random-number").text("Press any key to start the game.");
    $(document).keyup(function() {
        reset();
        listenForCrystal();



    });



