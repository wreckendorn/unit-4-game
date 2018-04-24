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


function numberToMatch() {
    // ... we generate a random number
    var random = Math.floor(Math.random() * (100 - 19)) + 19;
    // ... and then dump the random number into our random-number div.
    $("#random-number").text(random);
    return random;
  }

function crystalNumberGen() {
    var random = Math.floor(Math.random() * 12) + 1;
}

function reset() {
        totalScore = 0;
        matchThisNumber = 0;
}

function addScore(crystalChosen, scoreSoFar) {
    totalScore = scoreSoFar + crystalChosen;
    $("#total-score").text(totalScore);
}

$(document).ready(function() {
          var totalScore = 0;
         $("#total-score").text(totalScore);
// call function to generate number user will need to match
        var matchThisNumber = numberToMatch();
// call function to genereate random for all four crystals
        var crystalNumber1 = crystalNumberGen();

        var crystalNumber2 = crystalNumberGen();

        var crystalNumber3 = crystalNumberGen();

        var crystalNumber4 = crystalNumberGen();

    $("#crystal-number-1").on("click", function() {
        addScore(crystalNumber1, totalScore);
    });

    $(".jumbotron").on("click", "#crystal-number-2", function() {
        totalScore = totalScore + crystalNumber2;
        $("#total-score").text(totalScore);
    });
    $(".jumbotron").on("click", "#crystal-number-3", function() {
        addScore(crystalNumber3);
    });
    $(".jumbotron").on("click", "#crystal-number-4", function() {
        addScore(crystalNumber4);
    });

/*    if (totalScore < matchThisNumber) {
//add crystalChosen number to totalScore
    }
    else if(totalScore > matchThisNumber) {
        gamesLost = gamesLost - 1;
//update Losses div with new gamesLost number
    }
    else {
//update Wins div with new gamesWon number
        gamesWon = gamesWon + 1;
    }*/

      });
    

