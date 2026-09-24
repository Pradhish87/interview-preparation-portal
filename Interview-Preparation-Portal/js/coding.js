// ======================================================
// CODING PRACTICE
// ======================================================


// ======================================================
// QUESTION DATA
// ======================================================

const codingQuestions = {

    // ==================================================
    // EASY
    // ==================================================

    easy: [

        {
            question: "Which data structure stores elements in a sequential manner?",
            options: [
                "Array",
                "Graph",
                "Tree",
                "Database"
            ],
            answer: 0
        },

        {
            question: "What is the output of: 5 + 3?",
            options: [
                "6",
                "7",
                "8",
                "9"
            ],
            answer: 2
        },

        {
            question: "Which loop is commonly used when the number of iterations is known?",
            options: [
                "for loop",
                "while loop",
                "do-while loop",
                "recursive loop"
            ],
            answer: 0
        },

        {
            question: "Which operator is used for equality comparison in JavaScript?",
            options: [
                "=",
                "==",
                "===",
                "!="
            ],
            answer: 2
        },

        {
            question: "What is the first index of an array in most programming languages?",
            options: [
                "0",
                "1",
                "-1",
                "2"
            ],
            answer: 0
        },

        {
            question: "Which data type is used to store true or false?",
            options: [
                "String",
                "Boolean",
                "Integer",
                "Array"
            ],
            answer: 1
        },

        {
            question: "Which keyword is commonly used to return a value from a function?",
            options: [
                "send",
                "return",
                "output",
                "value"
            ],
            answer: 1
        },

        {
            question: "What does a loop help programmers do?",
            options: [
                "Repeat instructions",
                "Delete a program",
                "Create hardware",
                "Install software"
            ],
            answer: 0
        },

        {
            question: "Which of the following is a string?",
            options: [
                "100",
                "true",
                "\"Hello\"",
                "25.5"
            ],
            answer: 2
        },

        {
            question: "Which symbol is commonly used to write a single-line comment in JavaScript?",
            options: [
                "#",
                "//",
                "<!--",
                "**"
            ],
            answer: 1
        }

    ],


    // ==================================================
    // MEDIUM
    // ==================================================

    medium: [

        {
            question: "What is the time complexity of binary search?",
            options: [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],
            answer: 1
        },

        {
            question: "Which algorithm is commonly used to sort an array efficiently?",
            options: [
                "Binary Search",
                "Merge Sort",
                "Linear Search",
                "DFS"
            ],
            answer: 1
        },

        {
            question: "Which data structure follows LIFO?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],
            answer: 1
        },

        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Heap"
            ],
            answer: 1
        },

        {
            question: "What is the average time complexity of searching in a hash table?",
            options: [
                "O(n)",
                "O(log n)",
                "O(1)",
                "O(n²)"
            ],
            answer: 2
        },

        {
            question: "Which technique divides a problem into smaller subproblems?",
            options: [
                "Divide and Conquer",
                "Linear Search",
                "Compilation",
                "Iteration"
            ],
            answer: 0
        },

        {
            question: "Which traversal visits the left subtree, root, and right subtree?",
            options: [
                "Preorder",
                "Postorder",
                "Inorder",
                "Level order"
            ],
            answer: 2
        },

        {
            question: "Which algorithm is used to find the shortest path in a weighted graph with non-negative edges?",
            options: [
                "Dijkstra's Algorithm",
                "Bubble Sort",
                "Binary Search",
                "DFS only"
            ],
            answer: 0
        },

        {
            question: "What is recursion?",
            options: [
                "A function calling itself",
                "A loop without condition",
                "Sorting data",
                "Creating a database"
            ],
            answer: 0
        },

        {
            question: "Which sorting algorithm repeatedly swaps adjacent elements?",
            options: [
                "Merge Sort",
                "Quick Sort",
                "Bubble Sort",
                "Heap Sort"
            ],
            answer: 2
        }

    ],


    // ==================================================
    // HARD
    // ==================================================

    hard: [

        {
            question: "Which technique is commonly used to solve overlapping subproblems efficiently?",
            options: [
                "Dynamic Programming",
                "Linear Search",
                "Bubble Sort",
                "Binary Search"
            ],
            answer: 0
        },

        {
            question: "What is the worst-case time complexity of Quick Sort?",
            options: [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],
            answer: 2
        },

        {
            question: "Which algorithm is commonly used to find a minimum spanning tree?",
            options: [
                "Kruskal's Algorithm",
                "Binary Search",
                "BFS",
                "Insertion Sort"
            ],
            answer: 0
        },

        {
            question: "Which data structure is commonly used in BFS?",
            options: [
                "Stack",
                "Queue",
                "Heap",
                "Hash only"
            ],
            answer: 1
        },

        {
            question: "Which data structure is commonly used in DFS?",
            options: [
                "Queue",
                "Stack",
                "Priority Queue",
                "Array only"
            ],
            answer: 1
        },

        {
            question: "What is memoization?",
            options: [
                "Storing previously calculated results",
                "Deleting unused variables",
                "Sorting an array",
                "Creating a graph"
            ],
            answer: 0
        },

        {
            question: "Which approach chooses the locally optimal solution at each step?",
            options: [
                "Greedy Algorithm",
                "Dynamic Programming",
                "Backtracking",
                "Brute Force only"
            ],
            answer: 0
        },

        {
            question: "What is the main purpose of backtracking?",
            options: [
                "Explore possible solutions and undo choices when necessary",
                "Sort numbers",
                "Create databases",
                "Compress images"
            ],
            answer: 0
        },

        {
            question: "Which data structure is commonly used to implement a priority queue efficiently?",
            options: [
                "Heap",
                "Stack",
                "Linked List only",
                "String"
            ],
            answer: 0
        },

        {
            question: "What is the time complexity of accessing an element by index in an array?",
            options: [
                "O(n)",
                "O(log n)",
                "O(1)",
                "O(n²)"
            ],
            answer: 2
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

let selectedDifficulty = "easy";


// ======================================================
// ESCAPE HTML SPECIAL CHARACTERS
// ======================================================

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ======================================================
// START CODING PRACTICE
// ======================================================

function startCodingPractice(difficulty) {

    if (!codingQuestions[difficulty]) {

        console.error(
            "Invalid coding difficulty:",
            difficulty
        );

        return;
    }


    selectedDifficulty = difficulty;

    questions = codingQuestions[difficulty];

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    createCodingPracticeArea();

}


// ======================================================
// CREATE PRACTICE AREA
// ======================================================

function createCodingPracticeArea() {

    let practiceArea =
        document.getElementById(
            "codingPracticeArea"
        );


    if (!practiceArea) {

        practiceArea =
            document.createElement("section");

        practiceArea.id =
            "codingPracticeArea";

        practiceArea.className =
            "py-5 bg-light";


        practiceArea.innerHTML = `

            <div class="container">

                <div
                    id="codingQuestionArea"
                    class="card shadow-sm border-0 p-4"
                >
                </div>

            </div>

        `;


        const topicSection =
            document.querySelector(
                ".coding-topic"
            );


        if (topicSection) {

            const section =
                topicSection.closest("section");

            section.after(practiceArea);

        }

        else {

            document.body.appendChild(
                practiceArea
            );

        }

    }


    showCodingQuestion();

}


// ======================================================
// SHOW QUESTION
// ======================================================

function showCodingQuestion() {

    const questionArea =
        document.getElementById(
            "codingQuestionArea"
        );


    if (!questionArea) {

        console.error(
            "Coding question area not found."
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


    let difficultyName = "Easy";


    if (selectedDifficulty === "medium") {

        difficultyName = "Medium";

    }


    if (selectedDifficulty === "hard") {

        difficultyName = "Hard";

    }


    questionArea.innerHTML = `

        <div class="mb-4">

            <span class="badge bg-primary mb-2">
                ${difficultyName} Coding
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
                ${escapeHtml(question.question)}
            </h4>

        </div>


        <div id="codingOptionsArea">

            ${question.options
                .map(function(option, index) {

                    return `

                        <button
                            type="button"
                            class="btn btn-outline-secondary w-100 text-start mb-3 coding-option"
                            onclick="selectCodingAnswer(${index})"
                        >

                            <strong>
                                ${String.fromCharCode(
                                    65 + index
                                )}.
                            </strong>

                            <span class="ms-1">
                                ${escapeHtml(option)}
                            </span>

                        </button>

                    `;

                })
                .join("")}

        </div>


        <div
            class="d-flex justify-content-between mt-4"
        >

            <button
                type="button"
                class="btn btn-secondary"
                onclick="previousCodingQuestion()"
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
                onclick="nextCodingQuestion()"
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

function selectCodingAnswer(index) {

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(
            ".coding-option"
        );


    buttons.forEach(
        function(button, buttonIndex) {

            button.classList.remove(
                "btn-primary",
                "text-white"
            );


            button.classList.add(
                "btn-outline-secondary"
            );


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

function nextCodingQuestion() {

    if (selectedAnswer === null) {

        alert(
            "Please select an answer."
        );

        return;
    }


    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        selectedAnswer = null;

        showCodingQuestion();

    }

    else {

        finishCodingPractice();

    }

}


// ======================================================
// PREVIOUS QUESTION
// ======================================================

function previousCodingQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        selectedAnswer = null;

        showCodingQuestion();

    }

}


// ======================================================
// FINISH PRACTICE
// ======================================================

function finishCodingPractice() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    localStorage.setItem(
        "codingScore",
        percentage
    );


    localStorage.setItem(
        "codingQuestions",
        questions.length
    );


    localStorage.setItem(
        "codingDifficulty",
        selectedDifficulty
    );


    const questionArea =
        document.getElementById(
            "codingQuestionArea"
        );


    questionArea.innerHTML = `

        <div class="text-center py-5">

            <i
                class="bi bi-trophy-fill fs-1 text-warning"
            ></i>


            <h2 class="fw-bold mt-3">
                Coding Practice Completed!
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
                onclick="startCodingPractice('${selectedDifficulty}')"
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
// FILTER FUNCTIONALITY
// ======================================================

function setupCodingFilters() {

    const searchInput =
        document.getElementById(
            "codingSearch"
        );


    const difficultyFilter =
        document.getElementById(
            "codingDifficulty"
        );


    const topicFilter =
        document.getElementById(
            "codingTopic"
        );


    const resetButton =
        document.getElementById(
            "resetCodingFilters"
        );


    function filterTopics() {

        const search =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const difficulty =
            difficultyFilter
                ? difficultyFilter.value
                : "all";


        const topic =
            topicFilter
                ? topicFilter.value
                : "all";


        const cards =
            document.querySelectorAll(
                ".coding-level-card"
            );


        cards.forEach(
            function(card, index) {

                const text =
                    card.textContent
                        .toLowerCase();


                const matchesSearch =
                    search === "" ||
                    text.includes(search);


                let matchesDifficulty = true;


                if (
                    difficulty !== "all"
                ) {

                    const difficultyWords = {
                        easy: "easy",
                        medium: "medium",
                        hard: "hard"
                    };


                    matchesDifficulty =
                        text.includes(
                            difficultyWords[
                                difficulty
                            ]
                        );

                }


                let matchesTopic = true;


                if (topic !== "all") {

                    matchesTopic =
                        text.includes(topic);

                }


                const parent =
                    card.parentElement;


                if (
                    matchesSearch &&
                    matchesDifficulty &&
                    matchesTopic
                ) {

                    parent.style.display = "";

                }

                else {

                    parent.style.display =
                        "none";

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTopics
        );

    }


    if (difficultyFilter) {

        difficultyFilter.addEventListener(
            "change",
            filterTopics
        );

    }


    if (topicFilter) {

        topicFilter.addEventListener(
            "change",
            filterTopics
        );

    }


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            function() {

                if (searchInput) {

                    searchInput.value = "";

                }


                if (difficultyFilter) {

                    difficultyFilter.value =
                        "all";

                }


                if (topicFilter) {

                    topicFilter.value =
                        "all";

                }


                filterTopics();

            }
        );

    }

}


// ======================================================
// CONNECT DIFFICULTY BUTTONS
// ======================================================

function connectCodingButtons() {

    const cards =
        document.querySelectorAll(
            ".coding-level-card"
        );


    const difficulties = [
        "easy",
        "medium",
        "hard"
    ];


    cards.forEach(
        function(card, index) {

            const button =
                card.querySelector(
                    "button"
                );


            if (!button) {

                return;
            }


            button.addEventListener(
                "click",
                function() {

                    startCodingPractice(
                        difficulties[index]
                    );

                }
            );

        }
    );

}


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        connectCodingButtons();

        setupCodingFilters();

    }
);


// ======================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ======================================================

window.startCodingPractice =
    startCodingPractice;

window.selectCodingAnswer =
    selectCodingAnswer;

window.nextCodingQuestion =
    nextCodingQuestion;

window.previousCodingQuestion =
    previousCodingQuestion;