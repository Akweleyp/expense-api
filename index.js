import express from "express";
import userRouter from "./routes/userroutes.js";
import expenseRouter from "./routes/expenseroutes.js";
import mongoose from "mongoose";
//make database connection 
await mongoose.connect(process.env.MONGO_URI);


//Create an express app
const app = express();

// Use global middlewares
app.use(express.json());


// Use Routes
app.use(userRouter);
app.use(expenseRouter);




//Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
