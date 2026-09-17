const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();


// ========================================
// CORS
// ========================================

const allowedOrigins = [
    "https://capstone-project-yg3e.vercel.app",
    "http://127.0.0.1:5500",
    "http://localhost:5500"
];

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow requests without an origin
            // such as Postman
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error("Not allowed by CORS")
            );
        },

        credentials: true
    })
);


// ========================================
// BODY PARSER
// ========================================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "SafeReach API is running"
    });

});


// ========================================
// AUTHENTICATION
// ========================================

app.use("/api/auth", authRoutes);


// ========================================
// REPORTS
// ========================================

app.use("/api/reports", reportRoutes);


// ========================================
// 404
// ========================================

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});


module.exports = app;