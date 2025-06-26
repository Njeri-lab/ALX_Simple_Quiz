function checkAnswer () {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('quiz').value;
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."
    } else {
      feedback.textContent = "That's incorrect. Try again!"  
    }
}

document.getElementById("submit-answer");

button.addEventListener("click", (checkAnswer));