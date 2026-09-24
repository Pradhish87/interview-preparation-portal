// ======================================================
// TECHNICAL PRACTICE
// ======================================================

// ======================================================
// QUESTION DATA
// ======================================================

const technicalQuestions = {

    programming: [
        {
            question: "Which of the following is a programming language?",
            options: ["HTML", "CSS", "Python", "HTTP"],
            answer: 2
        },
        {
            question: "What is a variable?",
            options: [
                "A fixed value",
                "A named storage location",
                "A programming error",
                "A function"
            ],
            answer: 1
        },
        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            answer: 1
        },
        {
            question: "Which data structure follows LIFO?",
            options: [
                "Queue",
                "Array",
                "Stack",
                "Linked List"
            ],
            answer: 2
        },
        {
            question: "What does OOP stand for?",
            options: [
                "Object Oriented Programming",
                "Object Operating Program",
                "Ordered Object Programming",
                "Open Object Process"
            ],
            answer: 0
        },
        {
            question: "Which concept allows a class to acquire properties of another class?",
            options: [
                "Encapsulation",
                "Inheritance",
                "Polymorphism",
                "Abstraction"
            ],
            answer: 1
        },
        {
            question: "Which is NOT a programming control structure?",
            options: [
                "if",
                "for",
                "while",
                "database"
            ],
            answer: 3
        },
        {
            question: "Which data structure stores elements in sequential order?",
            options: [
                "Array",
                "Graph",
                "Tree",
                "Hash Table"
            ],
            answer: 0
        },
        {
            question: "What is an algorithm?",
            options: [
                "A programming language",
                "A step-by-step solution to a problem",
                "A database",
                "An operating system"
            ],
            answer: 1
        },
        {
            question: "Which OOP concept hides internal implementation details?",
            options: [
                "Inheritance",
                "Abstraction",
                "Compilation",
                "Iteration"
            ],
            answer: 1
        }
    ],


    sql: [
        {
            question: "Which command is used to retrieve data from a database?",
            options: [
                "INSERT",
                "SELECT",
                "UPDATE",
                "DELETE"
            ],
            answer: 1
        },
        {
            question: "Which SQL command is used to add new records?",
            options: [
                "INSERT",
                "CREATE",
                "ALTER",
                "DROP"
            ],
            answer: 0
        },
        {
            question: "Which clause is used to filter records?",
            options: [
                "ORDER BY",
                "GROUP BY",
                "WHERE",
                "SELECT"
            ],
            answer: 2
        },
        {
            question: "Which keyword removes duplicate values from a result?",
            options: [
                "UNIQUE",
                "DISTINCT",
                "REMOVE",
                "FILTER"
            ],
            answer: 1
        },
        {
            question: "Which SQL command modifies existing records?",
            options: [
                "CHANGE",
                "MODIFY",
                "UPDATE",
                "ALTER"
            ],
            answer: 2
        },
        {
            question: "Which command removes records from a table?",
            options: [
                "REMOVE",
                "DELETE",
                "DROP",
                "CLEAR"
            ],
            answer: 1
        },
        {
            question: "Which function returns the number of rows?",
            options: [
                "SUM()",
                "COUNT()",
                "TOTAL()",
                "NUMBER()"
            ],
            answer: 1
        },
        {
            question: "Which clause is used to sort query results?",
            options: [
                "SORT BY",
                "ORDER BY",
                "GROUP BY",
                "ARRANGE BY"
            ],
            answer: 1
        },
        {
            question: "Which JOIN returns matching rows from both tables?",
            options: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL JOIN"
            ],
            answer: 0
        },
        {
            question: "Which constraint uniquely identifies each row?",
            options: [
                "FOREIGN KEY",
                "PRIMARY KEY",
                "CHECK",
                "DEFAULT"
            ],
            answer: 1
        }
    ],


    dbms: [
        {
            question: "What does DBMS stand for?",
            options: [
                "Database Management System",
                "Data Backup Management System",
                "Database Monitoring Service",
                "Data Management Software"
            ],
            answer: 0
        },
        {
            question: "Which key uniquely identifies a record?",
            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Alternate Key"
            ],
            answer: 1
        },
        {
            question: "What is normalization used for?",
            options: [
                "Increasing redundancy",
                "Reducing data redundancy",
                "Deleting databases",
                "Increasing storage"
            ],
            answer: 1
        },
        {
            question: "Which is a type of database model?",
            options: [
                "Relational",
                "Sequential",
                "Procedural",
                "Linear"
            ],
            answer: 0
        },
        {
            question: "What is a foreign key?",
            options: [
                "A key used to encrypt data",
                "A key referencing another table",
                "A password",
                "A duplicate key"
            ],
            answer: 1
        },
        {
            question: "Which property ensures a transaction is completed completely or not at all?",
            options: [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability"
            ],
            answer: 0
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Simple Query Language",
                "System Query Logic",
                "Structured Question Language"
            ],
            answer: 0
        },
        {
            question: "Which operation adds a new record?",
            options: [
                "INSERT",
                "DELETE",
                "UPDATE",
                "SELECT"
            ],
            answer: 0
        },
        {
            question: "What is an index used for?",
            options: [
                "Slowing queries",
                "Improving data retrieval speed",
                "Deleting records",
                "Creating users"
            ],
            answer: 1
        },
        {
            question: "Which relationship connects one record to many records?",
            options: [
                "One-to-one",
                "One-to-many",
                "Many-to-one only",
                "None"
            ],
            answer: 1
        }
    ],


    javascript: [
        {
            question: "Which keyword declares a block-scoped variable?",
            options: [
                "var",
                "let",
                "define",
                "variable"
            ],
            answer: 1
        },
        {
            question: "Which keyword declares a constant?",
            options: [
                "let",
                "constant",
                "const",
                "fixed"
            ],
            answer: 2
        },
        {
            question: "Which method adds an element to the end of an array?",
            options: [
                "push()",
                "pop()",
                "shift()",
                "add()"
            ],
            answer: 0
        },
        {
            question: "Which method removes the last array element?",
            options: [
                "remove()",
                "delete()",
                "pop()",
                "shift()"
            ],
            answer: 2
        },
        {
            question: "What does DOM stand for?",
            options: [
                "Document Object Model",
                "Data Object Management",
                "Document Order Model",
                "Digital Object Method"
            ],
            answer: 0
        },
        {
            question: "Which symbol is used for strict equality?",
            options: [
                "=",
                "==",
                "===",
                "!="
            ],
            answer: 2
        },
        {
            question: "Which method converts JSON text into a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.read()"
            ],
            answer: 0
        },
        {
            question: "Which function is used to print output in the browser console?",
            options: [
                "print()",
                "console.log()",
                "display()",
                "write()"
            ],
            answer: 1
        },
        {
            question: "Which keyword is used to define a function?",
            options: [
                "function",
                "def",
                "func",
                "method"
            ],
            answer: 0
        },
        {
            question: "Which feature handles asynchronous operations?",
            options: [
                "Promises",
                "Arrays",
                "Loops",
                "Objects"
            ],
            answer: 0
        }
    ],


    java: [
        {
            question: "Which language is Java?",
            options: [
                "Programming language",
                "Database",
                "Operating system",
                "Web server"
            ],
            answer: 0
        },
        {
            question: "Which keyword is used to create a class?",
            options: [
                "object",
                "class",
                "new",
                "create"
            ],
            answer: 1
        },
        {
            question: "Which keyword creates an object?",
            options: [
                "create",
                "object",
                "new",
                "instance"
            ],
            answer: 2
        },
        {
            question: "Which concept allows multiple forms?",
            options: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Abstraction"
            ],
            answer: 1
        },
        {
            question: "Which keyword is used for inheritance?",
            options: [
                "inherit",
                "extends",
                "implements",
                "superclass"
            ],
            answer: 1
        },
        {
            question: "Which collection does not allow duplicate elements?",
            options: [
                "List",
                "Set",
                "ArrayList",
                "Vector"
            ],
            answer: 1
        },
        {
            question: "Which keyword handles exceptions?",
            options: [
                "try",
                "check",
                "error",
                "handle"
            ],
            answer: 0
        },
        {
            question: "Which method is the entry point of a Java program?",
            options: [
                "start()",
                "run()",
                "main()",
                "execute()"
            ],
            answer: 2
        },
        {
            question: "Which keyword prevents a class from being inherited?",
            options: [
                "static",
                "private",
                "final",
                "protected"
            ],
            answer: 2
        },
        {
            question: "Which is used to implement an interface?",
            options: [
                "extends",
                "implements",
                "interface",
                "inherits"
            ],
            answer: 1
        }
    ],


    python: [
        {
            question: "Which keyword defines a function in Python?",
            options: [
                "function",
                "def",
                "func",
                "define"
            ],
            answer: 1
        },
        {
            question: "Which data type is mutable?",
            options: [
                "Tuple",
                "String",
                "List",
                "Integer"
            ],
            answer: 2
        },
        {
            question: "Which symbol is used for comments?",
            options: [
                "//",
                "/*",
                "#",
                "<!--"
            ],
            answer: 2
        },
        {
            question: "Which function displays output?",
            options: [
                "display()",
                "show()",
                "print()",
                "output()"
            ],
            answer: 2
        },
        {
            question: "Which data type stores key-value pairs?",
            options: [
                "List",
                "Tuple",
                "Dictionary",
                "Set"
            ],
            answer: 2
        },
        {
            question: "Which keyword is used for a loop over a sequence?",
            options: [
                "for",
                "loop",
                "repeat",
                "iterate"
            ],
            answer: 0
        },
        {
            question: "Which symbol is used for exponentiation?",
            options: [
                "^",
                "**",
                "//",
                "%%"
            ],
            answer: 1
        },
        {
            question: "Which method adds an item to a list?",
            options: [
                "add()",
                "insert()",
                "append()",
                "push()"
            ],
            answer: 2
        },
        {
            question: "Which keyword is used to handle exceptions?",
            options: [
                "catch",
                "error",
                "try",
                "handle"
            ],
            answer: 2
        },
        {
            question: "Which library is commonly used for data analysis?",
            options: [
                "Pandas",
                "Django",
                "Flask",
                "Tkinter"
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

let selectedSubject = "programming";


// ======================================================
// SUBJECT NAMES
// ======================================================

const subjectNames = {

    programming: "Programming",

    sql: "SQL",

    dbms: "DBMS",

    javascript: "JavaScript",

    java: "Java",

    python: "Python"

};


// ======================================================
// START PRACTICE
// ======================================================

function startTechnicalPractice(subject) {

    if (!technicalQuestions[subject]) {

        console.error(
            "Invalid technical subject:",
            subject
        );

        return;
    }


    selectedSubject = subject;

    questions = technicalQuestions[subject];

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    showTechnicalQuestion();

}


// ======================================================
// SHOW QUESTION
// ======================================================

function showTechnicalQuestion() {

    const questionArea =
        document.getElementById(
            "technicalQuestionArea"
        );


    // If practice area does not exist,
    // create it.

    if (!questionArea) {

        createPracticeArea();

        return;
    }


    const question =
        questions[currentQuestion];


    questionArea.innerHTML = `

        <div class="mb-4">

            <span class="badge bg-primary mb-2">
                ${subjectNames[selectedSubject]}
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


        <div id="technicalOptionsArea">

            ${question.options
                .map(function(option, index) {

                    return `

                        <button
                            type="button"
                            class="btn btn-outline-secondary w-100 text-start mb-3 technical-option"
                            onclick="selectTechnicalAnswer(${index})"
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
                onclick="previousTechnicalQuestion()"
                ${currentQuestion === 0
                    ? "disabled"
                    : ""}
            >

                <i class="bi bi-arrow-left me-1"></i>

                Previous

            </button>


            <button
                type="button"
                class="btn btn-primary"
                onclick="nextTechnicalQuestion()"
            >

                ${
                    currentQuestion ===
                    questions.length - 1
                        ? "Finish"
                        : "Next"
                }

                <i class="bi bi-arrow-right ms-1"></i>

            </button>

        </div>

    `;

}


// ======================================================
// CREATE PRACTICE AREA
// ======================================================

function createPracticeArea() {

    const subjectsSection =
        document.querySelector(
            ".technical-card"
        );


    if (!subjectsSection) {

        console.error(
            "Technical cards not found."
        );

        return;
    }


    const section =
        document.createElement("section");


    section.className = "py-5 bg-light";


    section.innerHTML = `

        <div class="container">

            <div class="technical-practice-container">

                <div
                    id="technicalQuestionArea"
                    class="card shadow-sm border-0 p-4"
                ></div>

            </div>

        </div>

    `;


    // Insert practice area after subjects section

    const subjects =
        document.querySelector(
            ".technical-card"
        ).closest("section");


    subjects.after(section);


    // Show question

    showTechnicalQuestion();

}


// ======================================================
// SELECT ANSWER
// ======================================================

function selectTechnicalAnswer(index) {

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(
            ".technical-option"
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

function nextTechnicalQuestion() {

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

        showTechnicalQuestion();

    }

    else {

        finishTechnicalPractice();

    }

}


// ======================================================
// PREVIOUS QUESTION
// ======================================================

function previousTechnicalQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        selectedAnswer = null;

        showTechnicalQuestion();

    }

}


// ======================================================
// FINISH PRACTICE
// ======================================================

function finishTechnicalPractice() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    localStorage.setItem(
        "technicalScore",
        percentage
    );


    localStorage.setItem(
        "technicalQuestions",
        questions.length
    );


    localStorage.setItem(
        "technicalSubject",
        selectedSubject
    );


    const questionArea =
        document.getElementById(
            "technicalQuestionArea"
        );


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
                Your ${subjectNames[selectedSubject]}
                score: ${percentage}%
            </p>


            <button
                type="button"
                class="btn btn-primary me-2"
                onclick="startTechnicalPractice('${selectedSubject}')"
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
// CONNECT EXISTING PRACTICE BUTTONS
// ======================================================

function connectPracticeButtons() {

    const cards =
        document.querySelectorAll(
            ".technical-card"
        );


    const subjects = [
        "programming",
        "sql",
        "dbms",
        "javascript",
        "java",
        "python"
    ];


    cards.forEach(
        function(card, index) {

            const button =
                card.querySelector(
                    ".technical-footer button"
                );


            if (!button) {

                return;
            }


            button.addEventListener(
                "click",
                function() {

                    startTechnicalPractice(
                        subjects[index]
                    );

                }
            );

        }
    );

}


// ======================================================
// FILTER FUNCTIONALITY
// ======================================================

function setupFilters() {

    const searchInput =
        document.getElementById(
            "technicalSearch"
        );


    const subjectFilter =
        document.getElementById(
            "subjectFilter"
        );


    const resetButton =
        document.getElementById(
            "resetTechnicalFilters"
        );


    function filterCards() {

        const search =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const subject =
            subjectFilter
                ? subjectFilter.value
                : "all";


        const cards =
            document.querySelectorAll(
                ".technical-card"
            );


        cards.forEach(
            function(card, index) {

                const subjectKey = [
                    "programming",
                    "sql",
                    "dbms",
                    "javascript",
                    "java",
                    "python"
                ][index];


                const cardText =
                    card.textContent
                        .toLowerCase();


                const matchesSearch =
                    search === "" ||
                    cardText.includes(search);


                const matchesSubject =
                    subject === "all" ||
                    subject === subjectKey;


                if (
                    matchesSearch &&
                    matchesSubject
                ) {

                    card.parentElement.style.display =
                        "";

                }

                else {

                    card.parentElement.style.display =
                        "none";

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterCards
        );

    }


    if (subjectFilter) {

        subjectFilter.addEventListener(
            "change",
            filterCards
        );

    }


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            function() {

                if (searchInput) {

                    searchInput.value = "";

                }


                if (subjectFilter) {

                    subjectFilter.value = "all";

                }


                filterCards();

            }
        );

    }

}


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        connectPracticeButtons();

        setupFilters();

    }
);


// ======================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ======================================================

window.startTechnicalPractice =
    startTechnicalPractice;

window.selectTechnicalAnswer =
    selectTechnicalAnswer;

window.nextTechnicalQuestion =
    nextTechnicalQuestion;

window.previousTechnicalQuestion =
    previousTechnicalQuestion;