function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');
  
  const answers = {
      q1: "Hello",
      q2: "Merci",
      q3: "Thank you",
      // Add more answers for questions 4-10
      q4: "Answer4",
      q5: "Answer5",
      q6: "Answer6",
      q7: "Answer7",
      q8: "Answer8",
      q9: "Answer9",
      q10: "Answer10",
  };

  let score = 0;

  for (let i = 1; i <= 10; i++) {
      const selectedAnswer = form.elements[`q${i}`].value;

      if (selectedAnswer === answers[`q${i}`]) {
          score++;
      }
  }

  resultDiv.innerHTML = `Your score: ${score} out of 10`;
}
