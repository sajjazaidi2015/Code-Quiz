localStorage.removeItem('score')
var initialTotalScore = JSON.parse(localStorage.getItem('initialTotalScore'));
var retrivedHighScores = [];
var highScores = JSON.parse(localStorage.getItem('highScores'))
if(highScores == null) {
    if(initialTotalScore != null) {
        localStorage.setItem('highScores', JSON.stringify([initialTotalScore]))
        retrivedHighScores.push(initialTotalScore)
        localStorage.removeItem('initialTotalScore')
    }
} else {
    retrivedHighScores = JSON.parse(localStorage.getItem('highScores'))
    if(initialTotalScore != null) {
        retrivedHighScores.push(initialTotalScore)
    }
    localStorage.setItem('highScores', JSON.stringify(retrivedHighScores))
    localStorage.removeItem('initialTotalScore')
}
var sortedArray = retrivedHighScores.sort(function(a , b){
    return b.score - a.score
})
var listEl = document.querySelector('#highscores')
for (i = 0; i < sortedArray.length; i++){
    const score = sortedArray[i]
    const liEl = document.createElement('li');
    liEl.textContent = score.score + " - " + score.initial;
    listEl.appendChild(liEl)
}
var cleBtn = document.querySelector('#clear-button')
cleBtn.addEventListener('click', function(){
    listEl.innerHTML = "";
    localStorage.removeItem('highScores');
})
