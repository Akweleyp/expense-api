import { Router } from "express";

import {deleteUser, getUser, updateUser} from "../controllers/usercontroller.js";

//Create product router
const userRouter = Router();

//Define Routes
userRouter.get("/user", getUser);

userRouter.patch("/user/:id", updateUser);

userRouter.delete("/user/:id", deleteUser);

// Export Router
export default userRouter;
