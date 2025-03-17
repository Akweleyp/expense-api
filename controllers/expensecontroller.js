import { ExpenseModel } from "../models/expense.js";
import {
  addExpenseValidator,
  expenseIdValidator,
  updateExpenseValidator,
} from "../validators/expenses.js";

export const addExpense = async (req, res, next) => {
  try {
    const { error, value } = addExpenseValidator.validate(req.params, {
      abortEarly: false,
    });
    if (error) {
      res.status(400), json(error);
    }
    const result = await ExpenseModel.create(value);
    if (!result) {
      res.status(404).json({ message: "Expense has not been added" });
    }
    res.status(201).json({
      message: "Expense added",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getExpenses = async (req, res, next) => {
  try {
    const { error, value } = expenseIdValidator.validate(req.params, {
      abortEarly: false,
    });
    if (error) {
      res.status(400), json(error);
    }
    const result = await ExpenseModel.findById(value.id);
    if (!result) {
      res.status(404).json({ message: "Expenses not found" });
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateExpense = async (req, res, next) => {
  try {
    const { error, value } = updateExpenseValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      res.status(400), json(error);
    }
    const result = await ExpenseModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!result) {
      res.status(404).json({ message: "Expense not updated" });
    }
    res.status(201).json({
      message: "Expense updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (req, res, next) => {
  try {
    const { error, value } = expenseIdValidator.validate(req.params, {
      abortEarly: false,
    });
    if (error) {
      res.status(400), json(error);
    }
    const result = await ExpenseModel.findById(value.id);
    if (!result) {
      res.status(404).json({ message: "Expense not found" });
    }
    res.status(201).json({
      message: "Expense deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
