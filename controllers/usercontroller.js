import { error } from "console";
import { UserModel } from "../models/user_model.js";
import {updateUserValidator, userIdValidator} from "../validators/uservalidators.js";

export const getUser = async (req, res, next) => {
  try {
    const { error, value } = userIdValidator.validate(req.params, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json(error);
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
