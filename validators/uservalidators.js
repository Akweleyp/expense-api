import Joi from "joi";

export const addUserValidator = Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required(),
    email: Joi.string().required(),
   
});

export const userLoginValidator = Joi.object({
    email:Joi.string(). email(). required(),
    password:Joi.string(). required(),
});

export const userIdValidator = Joi.object({
    id:Joi.string().required(),

});

export const passwordResetValidator = Joi.object({
    password:Joi.string().required(),
});


export const updateUserValidator = Joi.object({
    username:Joi.string().optional(),
    password:Joi.string() .optional(),
    email: Joi.string(). email(). optional(),
   
});
