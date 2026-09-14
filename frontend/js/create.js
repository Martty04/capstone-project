const API_URL = "https://capstone-project-55lc.onrender.com/api";

// ========================================
// SIGN UP
// ========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        // Get form values
        const name = document
            .getElementById("name")
            .value
            .trim();

        const location = document
            .getElementById("location")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const phone = document
            .getElementById("phone")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value;

        const confirmPassword = document
            .getElementById("confirmPassword")
            .value;

        const gender = document
            .getElementById("gender")
            .value;


        // ========================================
        // VALIDATION
        // ========================================

        if (!name || !location || !email || !phone || !password || !gender) {
            alert("Please fill in all required fields.");
            return;
        }

        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Check password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }


        // ========================================
        // SEND REGISTRATION REQUEST
        // ========================================

        try {

            const response = await fetch(
                `${API_URL}/auth/register`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        location,
                        gender,
                        email,
                        phone,
                        password
                    })
                }
            );


            const data = await response.json();


            // ========================================
            // HANDLE ERROR
            // ========================================

            if (!response.ok) {

                console.error("Registration failed:", data);

                alert(
                    data.message ||
                    "Registration failed. Please try again."
                );

                return;
            }


            // ========================================
            // SAVE JWT TOKEN
            // ========================================

            localStorage.setItem(
                "token",
                data.token
            );


            // ========================================
            // SAVE USER INFORMATION
            // ========================================

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );


            // ========================================
            // SUCCESS
            // ========================================

            alert("Account created successfully!");


            // Go to dashboard
            window.location.href = "../html/dashboard.html";


        } catch (error) {

            console.error(
                "Registration error:",
                error
            );

            alert(
                "Unable to connect to SafeReach server. " +
                "Please check your internet connection or try again."
            );
        }

    });

}