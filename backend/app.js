import express from "express";
import dotenv from  "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";
const app =  express()

import path from "path";  // for deployment according to es module 
import { fileURLToPath } from "url"; // same here 
const __filename = fileURLToPath(import.meta.url); // same here 
const __dirname = path.dirname(__filename); // same here 



// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err?.stack}`);
    console.log("Shutting down due to uncaught expection");
    process.exit(1);
  });



  if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "backend/config/config.env" });
  }


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


if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
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