const quizData = [
  {
    type: "single",
    question: "Which country hosted the G20 Summit 2023?",
    options: ["Brazil", "India", "Japan", "USA"],
    answer: "India"
  },
  {
    type: "multi",
    question: "Which of the following are BRICS countries?",
    options: ["India", "Germany", "China", "Brazil"],
    answer: ["India", "China", "Brazil"]
  },
  {
    type: "fill",
    question: "ISRO successfully landed ______ mission on the Moon in 2023",
    answer: "Chandrayaan-3"
  }
]

let currentQuestion = 0
let score = 0

const quiz = document.getElementById("quiz")
const nextBtn = document.getElementById("nextBtn")
const popup = document.getElementById("popup")
const result = document.getElementById("result")

loadQuestion()

function loadQuestion() {
  quiz.innerHTML = ""
  popup.innerHTML = ""

  const q = quizData[currentQuestion]

  quiz.innerHTML += `<div class="question">${q.question}</div>`

  if (q.type === "single") {
    q.options.forEach(o => {
      quiz.innerHTML += `
        <label class="option">
          <input type="radio" name="answer" value="${o}">
          ${o}
        </label>
      `
    })
  }

  if (q.type === "multi") {
    q.options.forEach(o => {
      quiz.innerHTML += `
        <label class="option">
          <input type="checkbox" value="${o}">
          ${o}
        </label>
      `
    })
  }

  if (q.type === "fill") {
    quiz.innerHTML += `<input type="text" id="fill" class="option">`
  }
}

nextBtn.onclick = () => {
  const correct = checkAnswer()

  popup.innerHTML = correct ? "👍" : "👎"

  setTimeout(() => {
    popup.innerHTML = ""
    currentQuestion++

    if (currentQuestion < quizData.length) {
      loadQuestion()
    } else {
      quiz.innerHTML = ""
      nextBtn.style.display = "none"
      result.innerText = `Final Score: ${score} / ${quizData.length}`
    }
  }, 800)
}

function checkAnswer() {
  const q = quizData[currentQuestion]
  let correct = false

  if (q.type === "single") {
    const selected = document.querySelector('input[name="answer"]:checked')
    if (selected && selected.value === q.answer) correct = true
  }

  if (q.type === "multi") {
    const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(i => i.value)
    if (JSON.stringify(selected.sort()) === JSON.stringify(q.answer.sort())) correct = true
  }

  if (q.type === "fill") {
    const val = document.getElementById("fill").value.trim().toLowerCase()
    if (val === q.answer.toLowerCase()) correct = true
  }

  if (correct) score++
  return correct
}
