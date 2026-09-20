// ==========================================
// HR INTERVIEW PRACTICE
// ==========================================

const hrQuestions = [

    // ================= GENERAL =================

    {
        category: "general",
        difficulty: "easy",
        question: "Tell me about yourself.",
        answer:
            "Start with a short introduction about your education, skills and relevant experience. Mention your key strengths and briefly connect them to the role you are applying for."
    },

    {
        category: "general",
        difficulty: "easy",
        question: "Why should we hire you?",
        answer:
            "Explain the skills and qualities you can bring to the organization. Connect your technical knowledge, willingness to learn, teamwork and problem-solving abilities to the requirements of the role."
    },

    {
        category: "general",
        difficulty: "easy",
        question: "What are your strengths?",
        answer:
            "Choose two or three genuine strengths and support them with examples. For example, you can mention problem-solving, adaptability, teamwork or a willingness to learn."
    },


    // ================= BEHAVIORAL =================

    {
        category: "behavioral",
        difficulty: "medium",
        question: "Tell me about a time you worked successfully in a team.",
        answer:
            "Use the STAR method. Explain the situation, describe your responsibility, explain what you did to support the team and finish with the result achieved."
    },

    {
        category: "behavioral",
        difficulty: "medium",
        question: "Describe a challenge you faced and how you handled it.",
        answer:
            "Explain the challenge clearly, describe the actions you personally took and mention the result. Focus on what you learned and how the experience improved your problem-solving ability."
    },

    {
        category: "behavioral",
        difficulty: "medium",
        question: "Tell me about a failure and what you learned from it.",
        answer:
            "Choose a genuine but manageable example. Take responsibility, explain what went wrong, describe how you corrected it and highlight the lesson you learned."
    },


    // ================= SITUATIONAL =================

    {
        category: "situational",
        difficulty: "medium",
        question: "How would you handle a conflict with a teammate?",
        answer:
            "Stay calm and listen to the teammate's point of view. Discuss the issue professionally, focus on the common goal and try to find a practical solution without making the situation personal."
    },

    {
        category: "situational",
        difficulty: "hard",
        question: "What would you do if you had multiple deadlines at the same time?",
        answer:
            "Prioritize the tasks based on urgency and importance. Break large tasks into smaller steps, create a schedule and communicate early if a deadline may be affected."
    },


    // ================= CAREER =================

    {
        category: "career",
        difficulty: "easy",
        question: "Where do you see yourself in five years?",
        answer:
            "Talk about developing your technical and professional skills, taking greater responsibilities and contributing to the organization. Keep your answer realistic and connected to your career direction."
    },

    {
        category: "career",
        difficulty: "hard",
        question: "Why do you want to join our company?",
        answer:
            "Show that you understand the company and explain how its work, culture or opportunities connect with your career goals. Also mention how your skills can contribute to the organization."
    }

];


// ==========================================
// VARIABLES
// ==========================================

let filteredQuestions = [];

let currentQuestionIndex = 0;

let selectedCategory = "all";

let selectedDifficulty = "all";

let searchText = "";

let completedQuestions = 0;


// ==========================================
// HTML ELEMENTS
// ==========================================

const searchInput =
    document.getElementById("hrSearch");

const categoryFilter =
    document.getElementById("hrCategory");

const difficultyFilter =
    document.getElementById("hrDifficulty");

const resetButton =
    document.getElementById("resetHrFilters");

const questionArea =
    document.getElementById("hrQuestionArea");

const currentNumber =
    document.getElementById("hrCurrentNumber");

const totalNumber =
    document.getElementById("hrTotalNumber");

const progressBar =
    document.getElementById("hrProgressBar");

const practiceTitle =
    document.getElementById("hrPracticeTitle");

const practiceSubtitle =
    document.getElementById("hrPracticeSubtitle");


// ==========================================
// START PRACTICE BUTTONS
// ==========================================

const practiceButtons =
    document.querySelectorAll(".hr-practice-btn");

practiceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category =
            button.dataset.category;

        selectedCategory = category;

        categoryFilter.value = category;

        applyFilters();

        scrollToPractice();

    });

});


// ==========================================
// SEARCH
// ==========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            searchText =
                searchInput.value
                    .trim()
                    .toLowerCase();

            applyFilters();

        }
    );

}


// ==========================================
// CATEGORY FILTER
// ==========================================

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        function() {

            selectedCategory =
                categoryFilter.value;

            applyFilters();

        }
    );

}


// ==========================================
// DIFFICULTY FILTER
// ==========================================

if (difficultyFilter) {

    difficultyFilter.addEventListener(
        "change",
        function() {

            selectedDifficulty =
                difficultyFilter.value;

            applyFilters();

        }
    );

}


// ==========================================
// RESET FILTERS
// ==========================================

if (resetButton) {

    resetButton.addEventListener(
        "click",
        function() {

            searchInput.value = "";

            categoryFilter.value = "all";

            difficultyFilter.value = "all";

            selectedCategory = "all";

            selectedDifficulty = "all";

            searchText = "";

            filteredQuestions = [];

            currentQuestionIndex = 0;

            completedQuestions = 0;

            resetPracticeArea();

        }
    );

}


// ==========================================
// APPLY FILTERS
// ==========================================

function applyFilters() {

    filteredQuestions =
        hrQuestions.filter(function(question) {

            const matchesCategory =
                selectedCategory === "all" ||
                question.category === selectedCategory;

            const matchesDifficulty =
                selectedDifficulty === "all" ||
                question.difficulty === selectedDifficulty;

            const searchableText =
                (
                    question.question +
                    " " +
                    question.category +
                    " " +
                    question.difficulty
                ).toLowerCase();

            const matchesSearch =
                searchText === "" ||
                searchableText.includes(searchText);

            return (
                matchesCategory &&
                matchesDifficulty &&
                matchesSearch
            );

        });


    currentQuestionIndex = 0;

    completedQuestions = 0;


    if (filteredQuestions.length === 0) {

        showNoQuestions();

        return;

    }


    showQuestion();

}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    if (
        filteredQuestions.length === 0 ||
        !questionArea
    ) {

        return;

    }


    const question =
        filteredQuestions[currentQuestionIndex];


    const categoryName =
        getCategoryName(question.category);


    const difficultyName =
        getDifficultyName(question.difficulty);


    currentNumber.textContent =
        currentQuestionIndex + 1;

    totalNumber.textContent =
        filteredQuestions.length;


    practiceTitle.textContent =
        categoryName + " Practice";


    practiceSubtitle.textContent =
        "Answer the question first, then compare your response with the sample answer.";


    const progress =
        (
            (currentQuestionIndex + 1) /
            filteredQuestions.length
        ) * 100;


    progressBar.style.width =
        progress + "%";


    questionArea.innerHTML = `

        <div class="border rounded-4 p-4 bg-white">

            <div
                class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
            >

                <span class="badge bg-primary">
                    ${categoryName}
                </span>

                <span class="badge bg-secondary">
                    ${difficultyName}
                </span>

            </div>


            <h4 class="fw-bold mb-4">

                ${escapeHtml(question.question)}

            </h4>


            <div
                id="sampleAnswer"
                class="alert alert-light border d-none"
            >

                <div class="fw-bold mb-2">

                    <i class="bi bi-lightbulb-fill me-2"></i>

                    Sample Answer

                </div>

                <p class="mb-0">
                    ${escapeHtml(question.answer)}
                </p>

            </div>


            <div class="d-flex flex-wrap gap-2">

                <button
                    type="button"
                    class="btn btn-outline-primary"
                    id="showAnswerBtn"
                >

                    <i class="bi bi-lightbulb me-2"></i>

                    Show Sample Answer

                </button>

            </div>


            <hr class="my-4">


            <div
                class="d-flex justify-content-between gap-2 flex-wrap"
            >

                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    id="previousHrBtn"
                    ${currentQuestionIndex === 0 ? "disabled" : ""}
                >

                    <i class="bi bi-arrow-left me-2"></i>

                    Previous

                </button>


                <button
                    type="button"
                    class="btn btn-primary"
                    id="nextHrBtn"
                >

                    ${
                        currentQuestionIndex ===
                        filteredQuestions.length - 1
                            ? "Finish Practice"
                            : "Next Question"
                    }

                    <i class="bi bi-arrow-right ms-2"></i>

                </button>

            </div>

        </div>

    `;


    connectPracticeButtons();

}


// ==========================================
// CONNECT QUESTION BUTTONS
// ==========================================

function connectPracticeButtons() {

    const showAnswerButton =
        document.getElementById("showAnswerBtn");

    const previousButton =
        document.getElementById("previousHrBtn");

    const nextButton =
        document.getElementById("nextHrBtn");


    if (showAnswerButton) {

        showAnswerButton.addEventListener(
            "click",
            function() {

                const answer =
                    document.getElementById("sampleAnswer");

                if (!answer) {
                    return;
                }


                answer.classList.remove("d-none");

                showAnswerButton.disabled = true;

                showAnswerButton.innerHTML = `
                    <i class="bi bi-check-circle me-2"></i>
                    Answer Shown
                `;

            }
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function() {

                if (currentQuestionIndex > 0) {

                    currentQuestionIndex--;

                    showQuestion();

                }

            }
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function() {

                if (
                    currentQuestionIndex <
                    filteredQuestions.length - 1
                ) {

                    completedQuestions++;

                    currentQuestionIndex++;

                    showQuestion();

                } else {

                    completedQuestions++;

                    showCompletion();

                }

            }
        );

    }

}


// ==========================================
// SHOW COMPLETION
// ==========================================

function showCompletion() {

    currentNumber.textContent =
        filteredQuestions.length;

    totalNumber.textContent =
        filteredQuestions.length;

    progressBar.style.width = "100%";


    practiceTitle.textContent =
        "Practice Completed! 🎉";

    practiceSubtitle.textContent =
        "You have completed this HR practice session.";


    questionArea.innerHTML = `

        <div class="text-center py-5">

            <div class="mb-4">

                <i
                    class="bi bi-check-circle-fill text-success"
                    style="font-size: 70px;"
                ></i>

            </div>


            <h3 class="fw-bold">
                Well Done!
            </h3>


            <p class="text-secondary">
                You completed
                <strong>
                    ${filteredQuestions.length}
                </strong>
                HR interview questions.
            </p>


            <p class="text-secondary">
                Review the sample answers and practice
                speaking your own answers confidently.
            </p>


            <div
                class="d-flex justify-content-center gap-2 flex-wrap mt-4"
            >

                <button
                    type="button"
                    class="btn btn-primary"
                    id="tryAgainHrBtn"
                >

                    <i class="bi bi-arrow-repeat me-2"></i>

                    Try Again

                </button>


                <a
                    href="dashboard.html"
                    class="btn btn-outline-secondary"
                >

                    <i class="bi bi-speedometer2 me-2"></i>

                    Dashboard

                </a>

            </div>

        </div>

    `;


    const tryAgainButton =
        document.getElementById("tryAgainHrBtn");


    if (tryAgainButton) {

        tryAgainButton.addEventListener(
            "click",
            function() {

                currentQuestionIndex = 0;

                completedQuestions = 0;

                showQuestion();

            }
        );

    }


    localStorage.setItem(
        "hrQuestionsCompleted",
        filteredQuestions.length
    );

}


// ==========================================
// NO QUESTIONS FOUND
// ==========================================

function showNoQuestions() {

    currentNumber.textContent = "0";

    totalNumber.textContent = "0";

    progressBar.style.width = "0%";


    practiceTitle.textContent =
        "No Questions Found";


    practiceSubtitle.textContent =
        "Try changing your search or filters.";


    questionArea.innerHTML = `

        <div class="text-center py-5">

            <i
                class="bi bi-search fs-1 text-secondary"
            ></i>

            <h4 class="fw-bold mt-3">
                No Matching Questions
            </h4>

            <p class="text-secondary">
                No HR questions match your current filters.
            </p>


            <button
                type="button"
                class="btn btn-outline-primary"
                id="clearHrFiltersBtn"
            >

                <i class="bi bi-arrow-clockwise me-2"></i>

                Clear Filters

            </button>

        </div>

    `;


    const clearButton =
        document.getElementById("clearHrFiltersBtn");


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function() {

                resetButton.click();

            }
        );

    }

}


// ==========================================
// RESET PRACTICE AREA
// ==========================================

function resetPracticeArea() {

    currentNumber.textContent = "0";

    totalNumber.textContent = "0";

    progressBar.style.width = "0%";


    practiceTitle.textContent =
        "Ready to Practice?";


    practiceSubtitle.textContent =
        "Select a category above and start practicing.";


    questionArea.innerHTML = `

        <div class="text-center py-5">

            <i
                class="bi bi-person-badge fs-1 text-primary"
            ></i>

            <h4 class="fw-bold mt-3">
                Ready to Practice?
            </h4>

            <p class="text-secondary">
                Choose a preparation area above to begin.
            </p>

        </div>

    `;

}


// ==========================================
// SCROLL TO PRACTICE
// ==========================================

function scrollToPractice() {

    const practiceSection =
        document.getElementById("hrPracticeSection");


    if (practiceSection) {

        practiceSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ==========================================
// CATEGORY NAME
// ==========================================

function getCategoryName(category) {

    const names = {

        general: "General HR",

        behavioral: "Behavioral",

        situational: "Situational",

        career: "Career & Goals"

    };


    return names[category] || category;

}


// ==========================================
// DIFFICULTY NAME
// ==========================================

function getDifficultyName(difficulty) {

    const names = {

        easy: "Beginner",

        medium: "Intermediate",

        hard: "Advanced"

    };


    return names[difficulty] || difficulty;

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHtml(text) {

    return String(text)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


// ==========================================
// INITIAL STATE
// ==========================================

resetPracticeArea();