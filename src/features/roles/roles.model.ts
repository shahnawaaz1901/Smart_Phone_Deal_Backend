import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  permissions: [
    { type: mongoose.Schema.ObjectId, ref: "Permission", required: true },
  ],
});

const RoleModel = mongoose.model("Role", roleSchema);
export default RoleModel;
