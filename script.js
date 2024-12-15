let score = 0;
let totalQuestions = 5;

function checkAnswer(button, status) {
  if (!button.classList.contains('answered')) {
    if (status === 'correct') {
      score++;
      button.classList.add('correct');
      alert("Correct! Great job.");
    } else {
      button.classList.add('wrong');
      alert("Incorrect. Try again!");
    }
    // Disable all buttons for the question
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.add('answered');
    });
  }
}

function finishQuiz() {
  alert(`Your score: ${score}/${totalQuestions}`);
  resetQuiz();
}

function resetQuiz() {
  // Reset score
  score = 0;
  // Enable buttons and remove styles
  const buttons = document.querySelectorAll('.quiz-item button');
  buttons.forEach(button => {
    button.disabled = false;
    button.classList.remove('correct', 'wrong', 'answered');
  });
}
