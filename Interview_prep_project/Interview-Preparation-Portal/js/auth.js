import { auth, db } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";


import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const registerForm = document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }


        try {

            // Create Firebase account
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user = userCredential.user;


            // Save user's name
            await updateProfile(user, {
                displayName: fullName
            });


            // Save user information in Firestore
            await setDoc(doc(db, "users", user.uid), {

                name: fullName,
                email: email,
                uid: user.uid,
                createdAt: serverTimestamp()

            });


            alert("Registration successful!");

            // Go to dashboard
            window.location.href = "dashboard.html";


        } catch (error) {

            console.error(error);

            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered.");
            }
            else if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email address.");
            }
            else if (error.code === "auth/weak-password") {
                alert("Password must be at least 6 characters.");
            }
            else {
                alert("Registration failed. Please try again.");
            }

        }

    });

}
// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login successful!");

            window.location.href = "dashboard.html";

        } catch (error) {

            console.error(error);

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/wrong-password"
            ) {
                alert("Incorrect email or password.");
            }
            else if (error.code === "auth/user-not-found") {
                alert("No account found with this email.");
            }
            else if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email address.");
            }
            else {
                alert("Login failed. Please try again.");
            }

        }

    });

}