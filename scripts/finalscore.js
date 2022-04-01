var score = document.querySelector("#final-score");
var subBtn = document.querySelector(".button");

// Get the value from the local storage
var finalScore = window.localStorage.getItem("score");
console.log(finalScore);
var totalScore = 0;
//to convert the string value into array
var finalScoreArray = finalScore.split(",");
console.log(finalScoreArray);

for (i = 0; i < finalScoreArray.length; i++) {
  var value = finalScoreArray[i];
  if (value == "true") {
    totalScore = totalScore + 5;
    console.log(totalScore);
    score.textContent = "Your Final score is " + totalScore;
  }
}
var initialInput = document.querySelector("#initial");

subBtn.addEventListener("click", function () {
  if (initialInput.value == "") {
    alert("Enter the inital");
  } else {
    var initialTotalScore = {
      score: totalScore,
      initial: initialInput.value,
    };
    localStorage.setItem('initialTotalScore', JSON.stringify(initialTotalScore))
    window.location = './high-score.html'
  }
});
