const inquirer = require("inquirer");
const randomTrivia = require("./jservice");
const randomNum = Math.floor((Math.random() * 3) + 1);

console.info("Stop! Who would cross the Bridge of Death must answer me these questions three, 'ere the other side he see.");

if(randomNum % 2 == 0) {
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "adventurerName"
    },{
        type: "input",
        message: "What is your quest?",
        name: "adventurerQuest"
    },{
        type: "input",
        message: "What is your favorite color?",
        name: "adventurerColor"
    }]).then(() => {
        console.info("Right. Off you go.");
    });
} else {
    let randomQuestion,
        randomAnswer;
    randomTrivia.randomQuestion().then((response) => {
        if(response && response[0].question) {
            randomQuestion = response[0].question,
            randomAnswer = response[0].answer;
        } else {
            randomQuestion = "What is the air-speed velocity of an unladen swallow",
            randomAnswer = "24 miles per hour.";
        }
        return inquirer.prompt([{
            type: "input",
            message: "What is your name?",
            name: "adventurerName"
        },{
            type: "input",
            message: "What is your quest?",
            name: "adventurerQuest"
        },{
            type: "input",
            message: randomQuestion,
            name: "adventurerQuestion"
        }]);
    }).then((userAnswers) => {
        if(userAnswers.adventurerQuestion == randomAnswer) {
            console.info("Right. Off you go.");
        } else {
            console.info("You have been cast into Gorge of Eternal Peril!");
        }
    });
}
