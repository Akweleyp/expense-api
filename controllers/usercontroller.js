import { error } from "console";
import { UserModel } from "../models/user_model.js";
import {updateUserValidator, userIdValidator, userLoginValidator, userValidator} from "../validators/uservalidators.js";
import bcrypt from "bcrypt";
 
export const getUser = async (req, res, next) => {
  try {
    const { error, value } = userIdValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({message: error.details[0].message});
    }
    const result = await UserModel.findById(value.id);
    if (!result) {
      return res.status(404).json(error);
    }
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { eroor, value } = updateUserValidator.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json(error);
    }

    const result = UserModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      message: " User Successfully updated",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { error, value } = userIdValidator.validate(req.params, {
      abortEarly: false,
    });
    if (error) {
      res.status(400).json(error);
    }

    const result = await UserModel.findByIdAndDelete(value.id);
    if (!result) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      message: "User succesfully deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

 export const registerUser = async (req, res,next) =>{
try {
  const {error, value} = userValidator.validate(req.body);
   if (error){
    return res.status(400).json({message: error.details[0].message});
   }
   const existingUser = await UserModel.findOne({email: value.email})
   if(existingUser){
    return res.status(401).json({message: "User already exist"});
   }
   else{
    const hashedPassword = await bcrypt.hash(value.password, 12);
    const newUser = await UserModel.create({
      username: value.username,
      email: value.email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User created Successfully",
      data: newUser
    });
   }
  
} catch (error) {
  next(error)
}
 }


 export const loginUser = async(req, res) => {
  const{error, value}= userLoginValidator.validate(req.body);
  if(error){
    return res.status(400).json({message: error.details[0].message});
  }
  const existingUser = await UserModel.findOne({email: value.email});
  if(!existingUser){
    return res.status(401).json({message: "Invalid email"})
  }

 const  comparePassword = await bcrypt.compare(value.password, existingUser.password);
  if(!comparePassword){
    return res.status(401).json({message:"Invalid password"});
  }
  return res.status(201).json({message: "Login Successful"});
 };