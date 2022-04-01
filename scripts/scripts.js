// Timer Logic
let timerEl = document.querySelector("#timer")

// define a variable which holds time for each question
let questionTime = 15;
// define an array of 5 questions
let questions = [{
    question : 'Javascript is an _______ language?',
    answers: [
        { value: 'Object-Oriented', isValid: true },
        { value: 'Object Based', isValid: false },
        { value: 'Procedural', isValid: false },
        { value: 'None of the above', isValid: false },
    ]
},{
    question : 'Which of the following keywords is used to define a variable in Javascript?',
    answers: [
        { value: 'Var', isValid: false },
        { value: 'let', isValid: false },
        { value: 'Both var and let', isValid: true },
        { value: 'None of the above', isValid: false },
    ]
},{
    question : 'Which of the following methods can be used to display data in some form using Javascript?',
    answers: [
        { value: 'document.write()', isValid: false },
        { value: 'console.log()', isValid: false },
        { value: 'window.alert()', isValid: false },
        { value: 'All of the above', isValid: true },
    ]
},{
    question : 'How can a datatype be declared to be a constant type?',
    answers: [
        { value: 'const', isValid: true },
        { value: 'var', isValid: false },
        { value: 'let', isValid: false },
        { value: 'constant', isValid: false },
    ]
},{
    question : 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
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
let timeInterval = setInterval(function(){
    --totalTime
    // console.log(totalTime)
    // render remaining time in the html
    timerEl.textContent = ' Time: ' + totalTime + " Sec"; 
    // once timer is equal to zero send user to final scrore page
    // clear time interval  
    if (totalTime <= 0){
        clearInterval(timeInterval);
        localStorage.setItem("score", score)
        window.location = './final-score.html'
    }
}, 1000)

// Questions logic
let questionEl = document.querySelector('#question');
let answersEl = document.querySelector('#answers');
let yourAnswerEl = document.querySelector('#your-answer');
let score = [];


// define the variable questionCounter with initial value of 0
let questionCounter = 0;

// define a function renderQuestion() which return nothing but render the correct qurestion in the html
function renderQuestion(){
    //     select first qurestion from the questions array by questionCounter as index
    const selectedQuestion = questions[questionCounter];
    if(selectedQuestion === undefined) {
        localStorage.setItem("score", score)
        window.location = './final-score.html';
    }
    //     get the instance of the question DOM and set the question text inside
    questionEl.textContent = selectedQuestion.question;
    //     get the instance of UL and loop over the answers and create LI insert answer text, data attribute of true/false and append to UL
    //     //     increase questionCounter by 1;
    answersEl.innerHTML = "";
    for (i = 0; i < selectedQuestion.answers.length; i++){
        const answer = selectedQuestion.answers[i];
        const btnEl = document.createElement('button')
        const liEl = document.createElement('li');
        btnEl.classList.add('button')
        btnEl.textContent = answer.value; 
        liEl.appendChild(btnEl);
        answersEl.appendChild(liEl)
        btnEl.addEventListener('click', function(){
            // console.log('is valid ===>', answer.isValid)
            if (answer.isValid === true){
                yourAnswerEl.textContent = 'Correct'
                //it will remove the comment after 1 sec
                setTimeout(function () {
                    yourAnswerEl.innerHTML = "";
                }, 1000);
                //push the boolean in empty array
                score.push(answer.isValid)
                

                
            }else{
                yourAnswerEl.textContent = 'Wrong'
                setTimeout(function () {
                    yourAnswerEl.innerHTML = "";
                }, 1000);
                //it deduct the time 10sec for every wrong answer
                totalTime = totalTime -10; 
                //push the boolean in empty array
                score.push(answer.isValid)
                              
            }
            renderQuestion()
        })

    }
    questionCounter = questionCounter + 1
}


renderQuestion();


    // check if buttons data attribute is true
        // show Correct! message in the bottom
        // setTimeout and erase the message after 2000 milliseconds
    // if buttons data attribute is false
        // show Wrong! message in the bottom
        // setTimeout and erase the message after 2000 milliseconds
    // Answer is wrong or correct, call renderQuestion();
