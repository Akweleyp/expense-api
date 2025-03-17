import Joi from "joi";

export const addExpenseValidator = Joi.object({
    amount:Joi.string().required(),
    category:Joi.string().required(),
    date: Joi.string(). required(),

});

export const updateExpenseValidator = Joi.object({
    amount:Joi.string().optional(),
    category:Joi.string().optional(),
    date:Joi.string(). optional(),
});


export const expenseIdValidator = Joi.object({
    id: Joi.string().required(),
});

