// ======================================================
// APTITUDE PRACTICE
// ======================================================


// ======================================================
// QUESTION DATA
// ======================================================

const questionSets = {

    // ==================================================
    // QUANTITATIVE APTITUDE
    // ==================================================

    quantitative: [

        {
            question: "What is 20% of 250?",
            options: ["25", "40", "50", "60"],
            answer: 2
        },

        {
            question:
                "If a train travels 60 km in 1 hour, how far will it travel in 3 hours?",
            options: [
                "120 km",
                "150 km",
                "180 km",
                "200 km"
            ],
            answer: 2
        },

        {
            question:
                "What is the average of 10, 20 and 30?",
            options: [
                "15",
                "20",
                "25",
                "30"
            ],
            answer: 1
        },

        {
            question:
                "A product costs ₹500 and is sold for ₹600. What is the profit?",
            options: [
                "₹50",
                "₹75",
                "₹100",
                "₹150"
            ],
            answer: 2
        },

        {
            question:
                "What is the next number in the sequence: 2, 4, 6, 8, ?",
            options: [
                "9",
                "10",
                "11",
                "12"
            ],
            answer: 1
        },

        {
            question:
                "If 5 workers complete a job in 10 days, how many worker-days are required?",
            options: [
                "15",
                "25",
                "50",
                "100"
            ],
            answer: 2
        },

        {
            question:
                "Which number is divisible by 3?",
            options: [
                "14",
                "25",
                "36",
                "41"
            ],
            answer: 2
        },

        {
            question:
                "A ratio is 2:3. If the first number is 20, what is the second number?",
            options: [
                "25",
                "30",
                "35",
                "40"
            ],
            answer: 1
        },

        {
            question:
                "What is 15 × 4?",
            options: [
                "45",
                "50",
                "60",
                "75"
            ],
            answer: 2
        },

        {
            question:
                "If a shirt costs ₹800 and has a 10% discount, what is the selling price?",
            options: [
                "₹700",
                "₹720",
                "₹750",
                "₹780"
            ],
            answer: 1
        }

    ],



    // ==================================================
    // LOGICAL REASONING
    // ==================================================

    logical: [

        {
            question:
                "What is the next number: 2, 4, 8, 16, ?",
            options: [
                "20",
                "24",
                "32",
                "36"
            ],
            answer: 2
        },

        {
            question:
                "If CAT is coded as DBU, how is DOG coded?",
            options: [
                "EPH",
                "EOG",
                "DPH",
                "FPH"
            ],
            answer: 0
        },

        {
            question:
                "Find the odd one out.",
            options: [
                "Apple",
                "Mango",
                "Carrot",
                "Banana"
            ],
            answer: 2
        },

        {
            question:
                "If all roses are flowers and some flowers are red, which statement is definitely true?",
            options: [
                "All roses are red",
                "Some roses are red",
                "All roses are flowers",
                "No roses are flowers"
            ],
            answer: 2
        },

        {
            question:
                "What comes next: A, C, E, G, ?",
            options: [
                "H",
                "I",
                "J",
                "K"
            ],
            answer: 1
        },

        {
            question:
                "If today is Monday, what day will it be after 10 days?",
            options: [
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            answer: 1
        },

        {
            question:
                "Which number does not belong to the group?",
            options: [
                "3",
                "5",
                "7",
                "10"
            ],
            answer: 3
        },

        {
            question:
                "Complete the series: 1, 3, 6, 10, ?",
            options: [
                "12",
                "15",
                "16",
                "18"
            ],
            answer: 1
        },

        {
            question:
                "If BOOK is coded as CPPL, how is PEN coded?",
            options: [
                "QFO",
                "QEN",
                "PFN",
                "RFO"
            ],
            answer: 0
        },

        {
            question:
                "Which shape has three sides?",
            options: [
                "Square",
                "Triangle",
                "Circle",
                "Rectangle"
            ],
            answer: 1
        }

    ],



    // ==================================================
    // VERBAL ABILITY
    // ==================================================

    verbal: [

        {
            question:
                "Choose the synonym of 'Happy'.",
            options: [
                "Sad",
                "Joyful",
                "Angry",
                "Weak"
            ],
            answer: 1
        },

        {
            question:
                "Choose the antonym of 'Strong'.",
            options: [
                "Powerful",
                "Weak",
                "Brave",
                "Hard"
            ],
            answer: 1
        },

        {
            question:
                "Choose the correctly spelled word.",
            options: [
                "Succesful",
                "Successful",
                "Succesfull",
                "Successfull"
            ],
            answer: 1
        },

        {
            question:
                "Fill in the blank: She ___ to school every day.",
            options: [
                "go",
                "going",
                "goes",
                "gone"
            ],
            answer: 2
        },

        {
            question:
                "Choose the synonym of 'Begin'.",
            options: [
                "End",
                "Start",
                "Stop",
                "Close"
            ],
            answer: 1
        },

        {
            question:
                "Choose the antonym of 'Ancient'.",
            options: [
                "Old",
                "Historic",
                "Modern",
                "Past"
            ],
            answer: 2
        },

        {
            question:
                "Which word is a noun?",
            options: [
                "Run",
                "Beautiful",
                "School",
                "Quickly"
            ],
            answer: 2
        },

        {
            question:
                "Fill in the blank: They ___ playing cricket.",
            options: [
                "is",
                "am",
                "are",
                "was"
            ],
            answer: 2
        },

        {
            question:
                "Choose the correct sentence.",
            options: [
                "He don't like coffee.",
                "He doesn't likes coffee.",
                "He doesn't like coffee.",
                "He not like coffee."
            ],
            answer: 2
        },

        {
            question:
                "Choose the synonym of 'Intelligent'.",
            options: [
                "Clever",
                "Lazy",
                "Slow",
                "Weak"
            ],
            answer: 0
        }

    ]

};



// ======================================================
// VARIABLES
// ======================================================

let questions = [];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let selectedCategory = "quantitative";



// ======================================================
// START PRACTICE
// ======================================================

function startPractice(category) {

    // If no category is provided,
    // use quantitative by default.

    if (!category) {

        category = "quantitative";

    }


    // Check whether the category exists.

    if (!questionSets[category]) {

        console.error(
            "Invalid category:",
            category
        );

        return;
    }


    // Set the selected category.

    selectedCategory = category;


    // Load questions for that category.

    questions = questionSets[category];


    // Reset practice.

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    // Display first question.

    showQuestion();

}



// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

    const questionArea =
        document.getElementById("questionArea");


    if (!questionArea) {

        console.error(
            "questionArea element not found."
        );

        return;
    }


    const question =
        questions[currentQuestion];


    if (!question) {

        console.error(
            "Question not found."
        );

        return;
    }


    // Category title

    let categoryName =
        "Quantitative Aptitude";


    if (selectedCategory === "logical") {

        categoryName =
            "Logical Reasoning";

    }


    if (selectedCategory === "verbal") {

        categoryName =
            "Verbal Ability";

    }



    // Create question HTML

    questionArea.innerHTML = `

        <div class="mb-4">

            <span class="badge bg-primary mb-2">
                ${categoryName}
            </span>

            <div>

                <span class="badge bg-secondary">
                    Question
                    ${currentQuestion + 1}
                    of
                    ${questions.length}
                </span>

            </div>


            <h4 class="fw-bold mt-4">
                ${question.question}
            </h4>

        </div>



        <div id="optionsArea">

            ${question.options
                .map(function(option, index) {

                    return `

                        <button
                            type="button"
                            class="btn btn-outline-secondary w-100 text-start mb-3 option-btn"
                            onclick="selectAnswer(${index})"
                        >

                            <strong>
                                ${String.fromCharCode(
                                    65 + index
                                )}.
                            </strong>

                            ${option}

                        </button>

                    `;

                })
                .join("")}

        </div>



        <div class="d-flex justify-content-between mt-4">

            <button
                type="button"
                class="btn btn-secondary"
                onclick="previousQuestion()"
                ${currentQuestion === 0
                    ? "disabled"
                    : ""}
            >

                <i
                    class="bi bi-arrow-left me-1"
                ></i>

                Previous

            </button>



            <button
                type="button"
                class="btn btn-primary"
                onclick="nextQuestion()"
            >

                ${
                    currentQuestion ===
                    questions.length - 1
                        ? "Finish"
                        : "Next"
                }

                <i
                    class="bi bi-arrow-right ms-1"
                ></i>

            </button>

        </div>

    `;

}



// ======================================================
// SELECT ANSWER
// ======================================================

function selectAnswer(index) {

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(
            ".option-btn"
        );


    buttons.forEach(
        function(button, buttonIndex) {

            // Reset button

            button.classList.remove(
                "btn-primary",
                "text-white"
            );


            button.classList.add(
                "btn-outline-secondary"
            );


            // Highlight selected button

            if (buttonIndex === index) {

                button.classList.remove(
                    "btn-outline-secondary"
                );


                button.classList.add(
                    "btn-primary",
                    "text-white"
                );

            }

        }
    );

}



// ======================================================
// NEXT QUESTION
// ======================================================

function nextQuestion() {

    // Make sure an answer is selected.

    if (selectedAnswer === null) {

        alert(
            "Please select an answer."
        );

        return;
    }


    // Check answer.

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    // Move to next question.

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        selectedAnswer = null;

        showQuestion();

    }

    else {

        finishPractice();

    }

}



// ======================================================
// PREVIOUS QUESTION
// ======================================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        selectedAnswer = null;

        showQuestion();

    }

}



// ======================================================
// FINISH PRACTICE
// ======================================================

function finishPractice() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    // Save result locally.

    localStorage.setItem(
        "aptitudeScore",
        percentage
    );


    localStorage.setItem(
        "aptitudeQuestions",
        questions.length
    );


    localStorage.setItem(
        "aptitudeCategory",
        selectedCategory
    );


    // Get question area.

    const questionArea =
        document.getElementById(
            "questionArea"
        );


    // Display result.

    questionArea.innerHTML = `

        <div class="text-center py-5">

            <i
                class="bi bi-trophy-fill fs-1 text-warning"
            ></i>


            <h2 class="fw-bold mt-3">
                Practice Completed!
            </h2>


            <h3 class="text-primary mt-3">
                ${score} / ${questions.length}
            </h3>


            <p class="text-secondary">
                Your score: ${percentage}%
            </p>


            <button
                type="button"
                class="btn btn-primary me-2"
                onclick="startPractice('${selectedCategory}')"
            >

                <i
                    class="bi bi-arrow-repeat me-1"
                ></i>

                Try Again

            </button>


            <a
                href="dashboard.html"
                class="btn btn-outline-secondary"
            >

                Dashboard

            </a>

        </div>

    `;

}



// ======================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ======================================================

window.startPractice =
    startPractice;

window.selectAnswer =
    selectAnswer;

window.nextQuestion =
    nextQuestion;

window.previousQuestion =
    previousQuestion;