


//global variables	
    var compD;
    var wins = 0;
    var losses = 0;
    var tries = 13;
    var incorrect = [];
    var resetTries = 13;








    //things in this function will happen once per round.
    function compStart() {

        //create an array for the computer to randomly choose letters from.
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        //computer generates random letter
        var computerSelect = options[Math.floor(Math.random() * options.length)];

        console.log(computerSelect)
        compD = computerSelect;


    }



    //things in this function will happen multiple times per round. 
    document.onkeyup = function userStart() {



        //user guess
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        console.log(userGuess);


        //if the user guesses an incorrect letter for the first time a try is deducted and their guess is pushed to the incorrect array.   
        if (userGuess !== compD) {

            if (incorrect.indexOf(userGuess) === -1) {
                incorrect.push(userGuess);
                 tries--;
                
            }

           

            gamePlay();

        }

        //print wrong user guesses.	



        //if user guess = the letter selected by computer the user gets a win and their guesses reset to 13.
        if (userGuess === compD) {
            wins++;
            compStart();
            alert("you win");
            incorrect = [];
            tries = resetTries;
            gamePlay();

        }



        //if the user uses up all 13 tries, the  user acquires a loss, their guesses reset. A loss and the computer chooses a new letter
        if (tries < 1) {
            losses++;
            compStart();
            tries = resetTries;
            incorrect = [];
            gamePlay();


        }

        if (losses === 10) {

            var GameOver = "<h1>Game Over</h1>"

            document.getElementById('game').innerHTML = GameOver;
        }

        if (wins === 10) {

            var Congrats = "<h1>Congratulations, you are a winner!</h1>"

            document.getElementById('game').innerHTML = Congrats;
        }



    }



    //this function updates the user interface by connecting the javascript with the html.
    function gamePlay() {


        //this is the user interface.
        var html = "<h1>Psychic Game</h1>" +
            "<p> Guess which letter the computer has selected.</p>" +
            "<p>wins:" + wins + "</p>" +
            "<p>losses:" + losses + "</p>" +
            "<p>guesses:" + tries + "</p>" +
            "<p>Your guesses so far:" + incorrect + "</p>";

        console.log(html);

        document.getElementById('game').innerHTML = html;





    }

    // this onload function starts the program by calling the compstart function as well as the function controlling the user interface.

    window.onload = function() {
        gamePlay();
        compStart();
    }


