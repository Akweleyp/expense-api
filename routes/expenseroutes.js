import { Router } from "express";
import { addExpense, deleteExpense, getExpenses, updateExpense } from "../controllers/expensecontroller.js";

const expenseRouter = Router();

expenseRouter.post('/expenses', addExpense);

expenseRouter.get('/expenses', getExpenses);

expenseRouter.patch('/expenses/:id', updateExpense);

expenseRouter.delete('/expenses/:id', deleteExpense);


// Export Router

export default expenseRouter
