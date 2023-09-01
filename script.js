const quizData = [
    {
        question: 'What is the capital of France?',
        a: 'New York',
        b: 'London',
        c: 'Paris',
        d: 'Dublin',
        e: 'Bern',
        correct: 'c'
    },
    {
        question: 'Who is CEO of Tesla?',
        a: 'Jeff Bezos',
        b: 'Elon Musk',
        c: 'Bill Gates',
        d: 'Tony Stark',
        e: 'Jeffrey B. Kindler',
        correct: 'b'
    },
    {
        question: 'The iPhone was created by which company?',
        a: 'Apple',
        b: 'Intel',
        c: 'Amazon',
        d: 'Microsoft',
        e: 'AMD',
        correct: 'a'
    },
    {
        question: 'How many Harry Potter books are there?',
        a: '1',
        b: '4',
        c: '6',
        d: '7',
        e: '3',
        correct: 'd'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    // console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz() 
        } else {
            quiz.innerHTML = `
            <h2> The test is complete, you have received ${score * 25} points 🥳 </h2>
            <button class="submit" onClick="location.reload()"> Try Again 🌀 </button>
            `
        }
    }
})