// import Schema
import { model, Schema } from "mongoose";

const expenseSchema = new Schema({
    amount:{type:Number, required:true},
    category:{type:String, required:true},
    date:{type:Date, required: true},

}, {timestamps:true});

export const ExpenseModel = model('Expense', expenseSchema);

// const ExpenseSchema = new mongoose.Schema({
//     amount: { type: Number, required: true },
//     category: { type: String, required: true },
//     date: { type: Date, required: true },
//   });
  
//   export const ExpenseModel = mongoose.model('Expense', ExpenseSchema);
  