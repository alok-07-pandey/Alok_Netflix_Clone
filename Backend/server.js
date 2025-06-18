// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js"
// import cors from "cors";



// dotenv.config({
//     path :".env"
// }) 

// databaseConnection();


// const app = express();

// //middlewares
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
   
// }

// app.use(cors(corsOptions));
// //api
// app.use("/api/v1/user",userRoute);


// app.listen(process.env.PORT,()=>{
//     console.log(`Sonakshi is listen at port ${process.env.PORT}`);

// })


import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
    path: ".env"
});

databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', // Or your deployed frontend URL
    credentials: true
};

app.use(cors(corsOptions));

// Routes
app.use("/api/v1/user", userRoute);

// ✅ Add this root route to avoid Chrome's "dangerous site" error
app.get("/", (req, res) => {
    res.status(200).send("✅ Netflix Backend is Live and Safe!");
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Sonakshi is listen at port ${process.env.PORT}`);
});
