import express from "express";
import dotenv from  "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";
const app =  express()





// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err?.stack}`);
    console.log("Shutting down due to uncaught expection");
    process.exit(1);
  });



dotenv.config({path : "backend/config/config.env"})


// Connecting to database
connectDatabase();

app.use(express.json({
  limit : "10mb",
  verify:(req,res,buf) => {
    req.rawBody = buf.toString()
  }
}))

app.use(cookieParser())

// Import all routes
import productRoutes from "./routes/products.js"
import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/order.js"
import paymentRoutes from "./routes/payment.js"



app.use("/api/v1",productRoutes)
app.use("/api/v1",authRoutes)
app.use("/api/v1",orderRoutes)
app.use("/api/v1",paymentRoutes)


// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}



app.use(errorMiddleware)

const server = app.listen(process.env.PORT , ()=> {
    console.log(`Sever started (app.js) on Port : ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})

//Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err?.stack}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");
    server.close(() => {
      process.exit(1);
    });
  });