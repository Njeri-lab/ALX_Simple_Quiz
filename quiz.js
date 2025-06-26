function checkAnswer () {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."
    } else {
      feedback.textContent = "That's incorrect. Try again!"  
    }
}

document.getElementById("submit-answer");

button.addEventListener("click", (checkAnswer));