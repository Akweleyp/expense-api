import { Router } from "express";

import {deleteUser, getUser, loginUser, registerUser, updateUser} from "../controllers/usercontroller.js";

//Create product router
const userRouter = Router();

//Define Routes
userRouter.get("/user", getUser);

userRouter.patch("/user/:id", updateUser);

userRouter.delete("/user/:id", deleteUser);
userRouter.post('/users',registerUser);
userRouter.post('/users/login', loginUser)

// Export Router
export default userRouter;
