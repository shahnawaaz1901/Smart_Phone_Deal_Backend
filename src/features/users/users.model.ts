import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: { type: String },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
