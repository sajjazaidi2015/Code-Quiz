// Timer Logic
let timerEl = document.querySelector("#timer")

// define a variable which holds time for each question
let questionTime = 15;
// define an array of 5 questions
let questions = [{
    question1 : 'Javascript is an _______ language?',
    answers: [
        { value: 'Object-Oriented', isValid: true },
        { value: 'Object Based', isValid: false },
        { value: 'Procedural', isValid: false },
        { value: 'None of the above', isValid: false },
    ]
},{
    question2 : 'Which of the following keywords is used to define a variable in Javascript?',
    answers: [
        { value: 'Var', isValid: false },
        { value: 'let', isValid: false },
        { value: 'Both var and let', isValid: true },
        { value: 'None of the above', isValid: false },
    ]
},{
    question3 : 'Which of the following methods can be used to display data in some form using Javascript?',
    answers: [
        { value: 'document.write()', isValid: false },
        { value: 'console.log()', isValid: false },
        { value: 'window.alert()', isValid: false },
        { value: 'All of the above', isValid: true },
    ]
},{
    question4 : 'How can a datatype be declared to be a constant type?',
    answers: [
        { value: 'const', isValid: true },
        { value: 'var', isValid: false },
        { value: 'let', isValid: false },
        { value: 'constant', isValid: false },
    ]
},{
    question5 : 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    answers: [
        { value: 'Boolean', isValid: false },
        { value: 'Undefined', isValid: false },
        { value: 'Object', isValid: true },
        { value: 'Integer', isValid: false },
    ]
}]
// define total time =  times for each quesiton * number of questions in array
var totalTime = questionTime * questions.length
// start the setInterval and decrease the total time by 100 millseconds after 100 miliseconds
    // render remaining time in the html
    // once timer is equal to zero send user to final scrore page
    // clear time interval


// Questions logic

// define the variable questionCounter with initial value of 0
// define a function renderQuestion() which return nothing but render the correct qurestion in the html
    // select first qurestion from the questions array by questionCounter as index
    // get the instance of the question DOM and set the question text inside
    // get the instance of UL and loop over the answers and create LI insert answer text, data attribute of true/false and append to UL
    // increase questionCounter by 1;
    // if questionCounter is equal to questionArray.length goto final score page

    // add event listner on the UL;
    // check if buttons data attribute is true
        // show Correct! message in the bottom
        // setTimeout and erase the message after 2000 milliseconds
    // if buttons data attribute is false
        // show Wrong! message in the bottom
        // setTimeout and erase the message after 2000 milliseconds
    // Answer is wrong or correct, call renderQuestion();
