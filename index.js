const colours = require("colors");
const promptSync = require('prompt-sync');
const prompt = promptSync ();

// print 3 lines
    // console.log("Hello World".cyan); // one with coloured text
    // console.log("Highlighted".bgGrey); // one with coloured background
    // console.log("WARNING".red.bold.bgYellow); // one with both text and background


// print 1 - 100 with random colours - DID NOT WORK!
    // for (let n = 1; n <= 10; n++){
    //     console.log(n);
    // }
// Solution
    // for (let n = 1; n <= 10; n++){
    //     console.log(n.toString().random);
    // }

// remake fizzbuzzzing but..
    // mutltiple of 3 says fizz in red
    // mutltiple of 5 says buzz in green
    // mutltiple of 7 says zing in blue

    // for (let n = 1; n <= 100; n++){
    //     let m3 = (n % 3);
    //     let m5 = (n % 5);
    //     let m7 = (n % 7);
    //     if ((m3 == 0) && (m5 == 0) && (m7 == 0)){
    //         console.log("Fizz".red, "Buzz".green, "Zing".blue);
    //     }
    //     if ((m3 == 0) && (m5 == 0)){
    //         console.log("Fizz".red, "Buzz".green,);
    //     }
    //     if ((m5 == 0) && (m7 == 0)){
    //         console.log("Buzz".green, "Zing".blue);
    //     }
    //     if ((m3 == 0) && (m7 == 0)){
    //         console.log("Fizz".red, "Zing".blue);
    //     }
    //     if (m3 == 0){
    //         console.log("Fizz".red);
    //     }
    //     else if (m5 == 0) {
    //         console.log("Buzz".green);
    //     }
    //     else if (m7 == 0) {
    //         console.log("Zing".blue);
    //     }
    //     else {
    //         console.log(n);
    //     }
    // }


// single player rock paper scissors
    // Math.random() for computer
    // ext add colour
    // add lizard and spock

    // Set Computer's Choice
        let num = 1 + Math.floor(Math.random() * 3);
        let computerChoice = "tbc";
        switch (num){
            case 1 :
                computerChoice = "Rock";
                break;
            case 2 :
                computerChoice = "Paper";
                break;
            case 3 :
                computerChoice = "Scissors";
                break;
        }
        console.log(computerChoice);
    // Explain Input method to user
        console.log("Let's play a game of Rock, Paper, Scissors");
        console.log("Type R for Rock");
        console.log("Type P for Paper");
        console.log("Type S for Scissors");
    // Request user Input
        let userChoice = prompt("What is your choice: ".magenta.bold);
    // Validate user Input
        let valid = false;
        while (valid == false) {
            switch (userChoice){
            case "R" :
                userChoice = "Rock";
                valid = true;
                break;
            case "P" :
                userChoice = "Paper";
                valid = true;
                break;
            case "S" :
                userChoice = "Scissors";
                valid = true;
                break;
            default:
                console.log(userChoice,"is not a valid option".red.bold);
                userChoice = prompt("Please select either R, P or S: ".magenta.bold);
            }
        }
    // Win Logic
    // Tie
        if (userChoice == computerChoice) {
            console.log("It's a tie!".cyan);
        }
    // User selects Rock
        if (userChoice == "Rock") {
            if (computerChoice == "Paper") {
                console.log("You Loose!".red);
            } else {
                console.log("You WIN!".green);
            }
        }
    // User selects Paper
        if (userChoice == "Paper") {
            if (computerChoice == "Scissors") {
                console.log("You Loose!".red);
            } else {
                console.log("You WIN!".green);
            }
        }
    // User selects Rock
        if (userChoice == "Scissors") {
            if (computerChoice == "Rock") {
                console.log("You Loose!".red);
            } else {
                console.log("You WIN!".green);
            }
        }

