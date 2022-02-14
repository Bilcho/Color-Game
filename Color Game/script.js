// When user inputs the name of the color, i want you to check if that color is matching the one it is shown there

// First lets set some colors for the user to guess, a list, here i give you a list of colors, a div to display colors choosen randomly by you and lives and points count

var colors = ["blue", "green", "red", "purple", "orange", "yellow", "brown"];

var colorDiv = document.getElementById("colorDiv");

var currentColor;

var livesCount = 3;
var pointsCount = 0;

// When user press start, you choose color randomly to show on the screen, and function start should be like a function to set everything to default!

var notRunning = true;

function start() {

    livesCount = 3; /* Needed in future */
    pointsCount = 0; /* Needed in future */

    document.getElementById("lives").innerHTML = "Type your guess. You have 3 lives.";

    document.getElementById("points").innerHTML = "You have 0 points. Reach 10 to win!";

    if (notRunning === true) {
        currentColor = colors[Math.floor(Math.random() * colors.length)];

        colorDiv.style.backgroundColor = currentColor;

        notRunning = false;
    }
}

// When user press submit, you check the color if it matches with the current color, if it is true he gets point if not he lose a life

var points = document.getElementById("points");
var lives = document.getElementById("lives");

var submitIsLocked = false;

function submit() {

    if (submitIsLocked === false) {

        var input = document.getElementById("input").value;
        var finalInput = input.toLowerCase();

        if (finalInput === currentColor) {
            document.getElementById("info").innerHTML = "You're right!";
            pointsCount++;

            currentColor = colors[Math.floor(Math.random() * colors.length)];

            colorDiv.style.backgroundColor = currentColor;

            // Points section

            if (pointsCount === 10) {
                document.getElementById("points").innerHTML = "Victory! Press Start to play again.";

                notRunning = true;
                submitIsLocked = true;

            } 
        
            if (pointsCount > 1 && pointsCount < 10) {
                document.getElementById("points").innerHTML = "You have " + pointsCount.toString() + " points. Reach 10 to win!";
            } 
        
            if (pointsCount === 1) {
            document.getElementById("points").innerHTML = "You have " + pointsCount.toString() + " point. Reach 10 to win!"
            }

        } else {
            document.getElementById("info").innerHTML = "Wrong. Try again.";
            livesCount--;

        }

        // Lives section

        if (livesCount === 0) {

            document.getElementById("lives").innerHTML = "You lose. Press Start to play again.";

            notRunning = true;
            submitIsLocked = true;

        }
        if (livesCount === 1) {
            document.getElementById("lives").innerHTML = "Watch out. You have " + livesCount.toString() + " life left.";

        } 
    
        if (livesCount > 1) {
            document.getElementById("lives").innerHTML = "You have " + livesCount.toString() + " lives left.";
        }
    }

}
