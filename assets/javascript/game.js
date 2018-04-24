/*
1. randomly generate a number (crystal1Number, crystal2Number, crystal3Number, crystal4Number) between 1 and 12 for each of the four crystals
2. randomly generate a number(matchNumber) between 19 and 120 for the user to match
3. have totalScore that adds each crystal clicked to it.
match totalScore with matchNumber.  
    if it's less, allow user to continue clicking crystals
    if it's more, game over and Losses counter increases by 1
    if it's the same, game over and Wins counter increases by 1
Once game is over, reset totalScore and generate a new matchNumber and number for each crystal.

function for randomly generating crystal numbers
function for randomly generating matchNumber
function for resetting totalScore, new matchNumber, and crystal(s)number

main function waits for window to load, then calls resetscore function, then randomCrystalNumber function, then random matchNumber function.
setup a loop that allows user to continue clicking on crystals (if score is less, call this function)(if score is more, call this function)(if score is the same, call this function)*/
