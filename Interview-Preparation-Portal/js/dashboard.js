import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


// ================= AUTHENTICATION =================

onAuthStateChanged(auth, async function (user) {

    if (!user) {

        window.location.href = "login.html";

        return;

    }


    console.log("Logged in as:", user.email);


    // ================= DISPLAY USER NAME =================

    const welcomeTitle =
        document.getElementById("welcomeTitle");


    if (welcomeTitle) {

        const userName =
            user.displayName || "Student";

        welcomeTitle.textContent =
            `Welcome back, ${userName}! 👋`;

    }


    // ================= LOAD USER TEST RESULTS =================

    await loadTestResults(user.uid);

});


// ================= LOGOUT =================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async function () {

            try {

                await signOut(auth);

                window.location.href =
                    "login.html";

            }

            catch (error) {

                console.error(error);

                alert(
                    "Logout failed. Please try again."
                );

            }

        }
    );

}


// ================= LOAD TEST RESULTS =================

async function loadTestResults(userId) {

    const resultsContainer =
        document.getElementById(
            "recentResultsContainer"
        );


    if (!resultsContainer) {

        console.error(
            "Recent results container not found."
        );

        return;

    }


    try {

        const resultsRef =
            collection(
                db,
                "users",
                userId,
                "testResults"
            );


        const resultsQuery =
            query(
                resultsRef,
                orderBy(
                    "completedAt",
                    "desc"
                )
            );


        const snapshot =
            await getDocs(resultsQuery);


        // ================= NO RESULTS =================

        if (snapshot.empty) {

            updateDashboardStats(
                0,
                0,
                0,
                0
            );


            resultsContainer.innerHTML = `
                <div class="text-center py-4">

                    <div class="empty-icon">

                        <i class="bi bi-clipboard-data"></i>

                    </div>

                    <h5 class="fw-bold mt-3">
                        No Tests Completed Yet
                    </h5>

                    <p class="text-secondary">
                        Take your first mock test to see your results here.
                    </p>

                    <a
                        href="mock-test.html"
                        class="btn btn-primary"
                    >
                        Start Your First Test
                    </a>

                </div>
            `;

            return;

        }


        // ================= CALCULATE STATISTICS =================

        let totalTests = 0;

        let totalQuestions = 0;

        let totalPercentage = 0;


        resultsContainer.innerHTML = "";


        snapshot.forEach(function (documentSnapshot) {

            const result =
                documentSnapshot.data();


            const score =
                Number(result.score) || 0;


            const total =
                Number(result.totalQuestions) || 0;


            const percentage =
                Number(result.percentage) || 0;


            totalTests++;

            totalQuestions += total;

            totalPercentage += percentage;


            // ================= DATE =================

            let completedDate =
                "Date unavailable";


            if (result.completedAt) {

                completedDate =
                    result.completedAt
                        .toDate()
                        .toLocaleDateString(
                            "en-IN"
                        );

            }


            // ================= RESULT CARD =================

            const resultHTML = `
                <div class="border rounded-3 p-3 mb-3">

                    <div class="d-flex justify-content-between align-items-center">

                        <div>

                            <h6 class="fw-bold mb-1">

                                <i class="bi bi-file-earmark-check me-2"></i>

                                Mock Test

                            </h6>

                            <small class="text-secondary">

                                ${completedDate}

                            </small>

                        </div>


                        <div class="text-end">

                            <h5 class="fw-bold mb-0">

                                ${percentage}%

                            </h5>

                            <small class="text-secondary">

                                ${score}/${total}

                            </small>

                        </div>

                    </div>

                </div>
            `;


            resultsContainer.innerHTML +=
                resultHTML;

        });


        // ================= AVERAGE SCORE =================

        const averageScore =
            Math.round(
                totalPercentage / totalTests
            );


        // ================= UPDATE DASHBOARD =================

        updateDashboardStats(
            totalTests,
            averageScore,
            totalQuestions,
            averageScore
        );

    }

    catch (error) {

        console.error(
            "Error loading test results:",
            error
        );


        resultsContainer.innerHTML = `
            <div class="alert alert-danger">

                Unable to load test results.

            </div>
        `;

    }

}


// ================= UPDATE DASHBOARD STATISTICS =================

function updateDashboardStats(
    totalTests,
    averageScore,
    totalQuestions,
    progress
) {

    const testsElement =
        document.getElementById(
            "testsCompleted"
        );


    if (testsElement) {

        testsElement.textContent =
            totalTests;

    }


    const scoreElement =
        document.getElementById(
            "dashboardScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            averageScore + "%";

    }


    const questionsElement =
        document.getElementById(
            "questionsSolved"
        );


    if (questionsElement) {

        questionsElement.textContent =
            totalQuestions;

    }


    const progressElement =
        document.getElementById(
            "dashboardProgressScore"
        );


    if (progressElement) {

        progressElement.textContent =
            progress + "%";

    }

}