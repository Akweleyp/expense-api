// import Schema
import { model, Schema } from "mongoose";
import { type } from "os";
const expenseSchema = new Schema({
    amount:{type:Number, required:true},
    category:{type:String, required:true},
    date:{type:String, required: true},

}, {timestamps:true});

export const ExpenseModel = model('Expense', expenseSchema);