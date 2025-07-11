// script.js

const quizData = [

  {
    topic: "JavaScript DOM",
    question: "Which method is used to select an element by its ID in the DOM?",
    options: ["getElementsByClassName()", "getElementById()", "querySelectorAll()", "getElementsByTagName()"],
    answer: "getElementById()"
  },
  {
    topic: "JavaScript DOM",
    question: "What does innerText do in JavaScript?",
    options: ["Retrieves HTML content", "Changes CSS styles", "Gets or sets plain text inside an element", "Adds a new element to DOM"],
    answer: "Gets or sets plain text inside an element"
  },
  {
    topic: "HTML",
    question: "What does the <a> tag represent in HTML?",
    options: ["Audio", "Anchor (hyperlink)", "Article", "Action"],
    answer: "Anchor (hyperlink)"
  },
  {
    topic: "HTML",
    question: "Which attribute is used to open a link in a new tab?",
    options: ["alt", 'target="_blank"', "rel=\"new\"", "href=\"new\""],
    answer: 'target="_blank"'
  },
  {
    topic: "CSS",
    question: "What is the correct syntax to change the background color in CSS?",
    options: ["bg-color: red;", "background-color = red;", "background-color: red;", "color-background: red;"],
    answer: "background-color: red;"
  },
  {
    topic: "CSS",
    question: "How do you center a block element horizontally using CSS?",
    options: ["text-align: center;", "margin: 0 auto;", "float: center;", "align: middle;"],
    answer: "margin: 0 auto;"
  },
  {
    topic: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "define"],
    answer: "def"
  },
  {
    topic: "Python",
    question: "What is the output of print(2 * 'Hi') in Python?",
    options: ["HiHi", "4", "'Hi'", "Error"],
    answer: "HiHi"
  },
  {
    topic: "Python",
    question: "Which of the following is a valid list in Python?",
    options: ["(1, 2, 3)", "{1, 2, 3}", "[[1, 2], 3]", "[1, 2, 3]"],
    answer: "[1, 2, 3]"
  },
  {
    topic: "Python",
    question: "What does len() return in Python?",
    options: ["Length of an object", "Largest item in list", "Boolean value", "Index of object"],
    answer: "Length of an object"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));

    optionsEl.appendChild(label);
    optionsEl.appendChild(document.createElement("br"));
  });
}

function getSelectedOption() {
  const selected = document.querySelector("input[name='option']:checked");
  return selected ? selected.value : null;
}

function showResult() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  submitBtn.style.display = "none";
  resultEl.textContent = `You scored ${score} out of ${quizData.length}.`;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelectedOption();
  if (!answer) {
    alert("Please select an answer before submitting.");
    return;
  }

  if (answer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
