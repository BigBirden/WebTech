import mongoose, { mongo } from "mongoose";

//Схема пользователя
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true}
});

export default mongoose.model("User", UserSchema);