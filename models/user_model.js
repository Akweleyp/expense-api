//import schema
import { Schema, model} from "mongoose";

const userModel = new Schema({
    username: {type:String, required:true, unique:true},
    email:{type:String, required:true},
    password: {type:String, required:true}
});

export const UserModel = model('User', userModel);