//array of an object
const quizDB = [
  {
    question: "Q1: What is the full form of html",
    a: "Hello to my land",
    b: "Hey Text Markup language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q.2 JavaScript is a ___ -side programming language.",
    a: "client",
    b: "Server",
    c: "Both",
    d: "None",
    ans: "ans3",
  },
  {
    question:
      "Q.3 Which of the following will write the message “Hello DataFlair!” in an alert box?",
    a: "alertBox(“Hello DataFlair!”);",
    b: "alert(Hello DataFlair!);",
    c: "msgAlert(“Hello DataFlair!”);",
    d: "alert(“Hello DataFlair!”);",
    ans: "ans4",
  },
  {
    question: "Q.4 How do you find the minimum of x and y using JavaScript?",
    a: "min(x,y);",
    b: "Math.min(x,y)",
    c: "Math.min(xy)",
    d: "min(xy);",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const optio41 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  //   console.log(quizDB[0].question);
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((currentAnswerElement) => {
    if (currentAnswerElement.checked) {
      answer = currentAnswerElement.id;
    }
  });
  return answer;
};

const deSelectOption = () => {
  answers.forEach(
    (currentAnswerElement) => (currentAnswerElement.checked = false)
  );
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  //   console.log(checkedAnswer);
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deSelectOption();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.classList.remove("scoreArea");
    showScore.innerHTML = `
      <h3>You scored ${score} / ${quizDB.length}</h3>
      <button class="btn" onclick="location.reload();">Play Again</button>
      `;
  }
});
