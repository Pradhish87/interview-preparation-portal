import { auth, db } from "./firebase-config.js";

import {
    addDoc,
    collection,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const questions = [
    {
        question: "What is 20% of 250?",
        options: ["40", "50", "60", "70"],
        answer: 1
    },
    {
        question: "Which SQL command is used to retrieve data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        answer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "define", "variable", "declare"],
        answer: 0
    },
    {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Tree"],
        answer: 1
    },
    {
        question: "Which language is commonly used in data science?",
        options: ["Python", "HTML", "CSS", "SQL"],
        answer: 0
    },
    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Machine System",
            "Data Management Software"
        ],
        answer: 0
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["<!--", "//", "#", "/*"],
        answer: 1
    },
    {
        question: "Which OOP concept allows a class to inherit another class?",
        options: [
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"
        ],
        answer: 2
    },
    {
        question: "Which SQL clause is used to filter grouped records?",
        options: ["WHERE", "GROUP", "HAVING", "ORDER"],
        answer: 2
    },
    {
        question: "Which algorithm is commonly used to find an element in a sorted array?",
        options: [
            "Linear Search",
            "Binary Search",
            "Bubble Sort",
            "Selection Sort"
        ],
        answer: 1
    }
];


let currentQuestion = 0;
let selectedAnswers = [];
let timeLeft = 600;
let timerInterval = null;


// ================= START QUIZ =================

document.addEventListener("DOMContentLoaded", function () {

    loadQuestion();
    updateTimer();
    startTimer();

});


// ================= LOAD QUESTION =================

function loadQuestion() {

    const question = questions[currentQuestion];

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const optionsContainer =
        document.getElementById("optionsContainer");


    if (
        !questionNumber ||
        !questionText ||
        !optionsContainer
    ) {

        console.error(
            "Quiz HTML elements are missing."
        );

        return;

    }


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.className =
            "option-btn";


        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        if (
            selectedAnswers[currentQuestion] === index
        ) {

            button.classList.add("selected");

        }


        button.addEventListener("click", function () {

            selectAnswer(index);

        });


        optionsContainer.appendChild(button);

    });


    updateProgress();
    updateButtons();

}


// ================= SELECT ANSWER =================

function selectAnswer(index) {

    selectedAnswers[currentQuestion] = index;

    loadQuestion();

}


// ================= NEXT QUESTION =================

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

}


// ================= PREVIOUS QUESTION =================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// ================= PROGRESS =================

function updateProgress() {

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    const progressBar =
        document.getElementById("quizProgress");


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }

}


// ================= BUTTONS =================

function updateButtons() {

    const previousBtn =
        document.getElementById("previousBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const submitBtn =
        document.getElementById("submitBtn");


    if (
        !previousBtn ||
        !nextBtn ||
        !submitBtn
    ) {

        return;

    }


    previousBtn.disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextBtn.classList.add("d-none");

        submitBtn.classList.remove("d-none");

    }

    else {

        nextBtn.classList.remove("d-none");

        submitBtn.classList.add("d-none");

    }

}


// ================= TIMER =================

function startTimer() {

    timerInterval =
        setInterval(function () {

            timeLeft--;

            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                submitQuiz();

            }

        }, 1000);

}


// ================= UPDATE TIMER =================

function updateTimer() {

    const timer =
        document.getElementById("timer");


    if (!timer) {

        return;

    }


    const minutes =
        Math.floor(timeLeft / 60);


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


// ================= SUBMIT QUIZ =================

async function submitQuiz() {

    clearInterval(timerInterval);


    let score = 0;


    questions.forEach(function (question, index) {

        if (
            selectedAnswers[index] ===
            question.answer
        ) {

            score++;

        }

    });


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    // ================= SAVE TO LOCAL STORAGE =================

    localStorage.setItem(
        "lastScore",
        percentage
    );


    localStorage.setItem(
        "questionsSolved",
        questions.length
    );


    localStorage.setItem(
        "testCompleted",
        "true"
    );


    // ================= SAVE TO FIRESTORE =================

    const user = auth.currentUser;


    if (user) {

        try {

            await addDoc(
                collection(
                    db,
                    "users",
                    user.uid,
                    "testResults"
                ),
                {
                    score: score,
                    totalQuestions: questions.length,
                    percentage: percentage,
                    completedAt: serverTimestamp()
                }
            );


            console.log(
                "Test result saved to Firestore."
            );

        }

        catch (error) {

            console.error(
                "Error saving test result:",
                error
            );

        }

    }


    // ================= GO TO RESULTS PAGE =================

    window.location.href =
        "results.html";

}
// Make quiz functions available to HTML buttons
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.submitQuiz = submitQuiz;