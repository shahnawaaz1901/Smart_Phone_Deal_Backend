import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  phone: {
    type: String,
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
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
