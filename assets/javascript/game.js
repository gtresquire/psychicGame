/* <script> */

//create a variable with all letter options

var play = true

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// initialize variables for tracking our wins, losses, guesses so far and guesses left.
// tried using let= instead of var and got a waterfall error
var wins = 0;
var losses = 0;
var guessesSoFar = 0;
var guessesLeft = 26;  //this can go into a function as an initializer.. which can be called again.. 
                    //one section is for check.. other for rendering

//Use selects a key and presses. This initiates an event function.
// for (i = 0; i <26 ; i++) {

document.onkeypress = function(event) {

     if ( play === true){
        var userGuess = event.key;

//   Generate random letter from array and store in a variable.
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log (computerChoice) ;



// Logic to compare computer choice and user choice.
// Need to put in a counter to track guesses so far, and guess left

    // var i = 0 
    // for (i=0, i<26, i++) ({
    
    // while (guessesLeft <=0) {

        // below code seems to increment all elements by mult of 26.. 
        // var i = 0;
        // for (i = 0; i < 26 ; i++) {

    if(userGuess === computerChoice){
        wins++; guessesSoFar++; guessesLeft--;
        if(guessesLeft == 0){
            play = false; 
            document.getElementById("directions-text").innerHTML = "No More Guesses Left! Game Over.";

        }
    }
        
    else{
        losses++;  guessesSoFar++; guessesLeft--;
        if(guessesLeft == 0){
            play = false;
            document.getElementById("directions-text").innerHTML = "No More Guesses Left! Game Over.";
        }
    }



    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesSoFar').innerHTML = "Guesses SoFar: " + guessesSoFar;
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

     }
    
    }
    // if (guessesLeft = 0){
    //     break;
    // }

    // if (guessesLeft = 0){
    //     alert ("game over");
    // 

    // if (guessesLeft = 0)
         
    //  }   
    // else{
    //     // write to tell user game is done
    // }

