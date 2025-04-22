import mongoose, { mongo } from "mongoose";

export enum UserRoles{
    user = "user",
    moderator = "moderator",
    admin = "admin"
}

//Схема пользователя
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: UserRoles.user}
});

export default mongoose.model("User", UserSchema);