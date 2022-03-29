# Code-Quiz

// Pseudo code

1. Create a start quiz page
    - display the message and the start button
    - When user clicks the start button it will start the quiz
    - View high scrore link will be shown on the top left of the screen and when clicked it will take user to the high score page
2. Create a quiz page  
    - user will be presented with questions and four possible answers
        - data structure of the questions
            questions = [{
                question : 'What is name?',
                answers: [
                    { value: 'Hamza': isValid: false },
                    { value: 'Sajjad': isValid: true },
                    { value: 'Ameer': isValid: false },
                    { value: 'Marium': isValid: false },
                ]
            },{
                question : 'What is name?',
                answers: [
                    { value: 'Hamza': isValid: false },
                    { value: 'Sajjad': isValid: true },
                    { value: 'Ameer': isValid: false },
                    { value: 'Marium': isValid: false },
                ]
            }]
            - start the timer when the first question is presented
    - if user select the Correct answer Correct! message will be displayed
    - if user select the wrong answer Wrong! message will be displayed
        - subtract the time from the timer
    - if user answer all the quesitons or timer reach zero quiz will end
    - View high scrore link will be shown on the top left of the screen and when clicked it will take user to the high score page
    - timer will be shown on the top right corner of the screen
3. After quiz ends take user to the score page 
    - user will enter the initial and click submit then initials and scrore will be strored in the local storage and 
    user will be redirected to high score page
    - View high scrore link will be shown on the top left of the screen and when clicked it will take user to the high score page
4. On this page will show the list of users by there initials and score in decending order by score.
    