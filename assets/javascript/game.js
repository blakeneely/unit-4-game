$(document).ready(function() {
    var magicNum = 0;
    var userNum = 0;
    var wins = 0;
    var losses = 0;
    var winAudio = new Audio("assets/audio/win.mp3");
    var loseAudio = new Audio("assets/audio/lose.mp3")

    function getMagicNum(min, max) {                 // Assigns magicNum a number between min and max
        magicNum = Math.floor(Math.random() * (max - min +1)) + min;
        $("#magic-number").text(magicNum);
    };

    function assignValue() {                         // Assigns random number between 1 - 12 html value to each gem
        $("#blue-gem").val(Math.floor(Math.random() * 12) + 1);
        $("#yellow-gem").val(Math.floor(Math.random() * 12) + 1);
        $("#green-gem").val(Math.floor(Math.random() * 12) + 1);
        $("#purple-gem").val(Math.floor(Math.random() * 12) + 1);
    };

    function gameStart() {                           // Resets round
        magicNum = 0;
        userNum = 0;
        assignValue();
        getMagicNum(19, 120);
        $("#user-num").text(userNum);
    };

    function checkWin() {                            // Checks if win or lose, alerts, adds wins or losses, updates html and resets game
        if (userNum === magicNum) {
            // alert("You win!")
            gameStart();
            wins++;
            winAudio.play();
            $(".wins").text("WINS: " + wins)
        }
        else if (userNum > magicNum) {
            // alert("You lose!")
            gameStart();
            losses++;
            loseAudio.play();
            $(".losses").text("LOSSES: " + losses)
        }
    };

    // ********** Main Game ***********

    getMagicNum(19, 120);                           // Call assign magicNum a value between 19 - 120
    assignValue();                                  // Assign random number to gem html value

    $(".gem-image").on("click", function(){         // On Click event for each gem, adds value to userNum and checks if win or lose
        userNum = parseInt(this.value) + parseInt(userNum);
        $("#user-num").text(userNum);
        checkWin();
    });

});