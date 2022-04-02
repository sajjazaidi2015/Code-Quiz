var score = document.querySelector("#final-score");
var subBtn = document.querySelector(".button");

// Get the value from the local storage
var finalScoreArray = JSON.parse(window.localStorage.getItem("score"));
var totalScore = 0;
//to convert the string value into array

for (i = 0; i < finalScoreArray.length; i++) {
  var value = finalScoreArray[i];
  if (value == true) {
    totalScore = totalScore + 5;
  }
}
score.textContent = "Your Final score is " + totalScore;
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
