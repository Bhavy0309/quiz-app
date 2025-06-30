// script.js

const quizData = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    answer: "<style>"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Desktop Oriented Mode"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which HTML tag is used to define an external style sheet?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    answer: "<link>"
  },
  {
    question: "Which HTML tag is used to define an internal JavaScript logic?",
    options: ["<style>", "<script> with <src>", "<link>", "<css>", "<script>"],
    answer: "<script>"
  },
  {
    question: "Which HTML tag is used to define an external JavaScript logic?",
    options: ["<style>", "<script> with <src>", "<link>", "<css> <script>"],
    answer: "<script> with <src>"
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
