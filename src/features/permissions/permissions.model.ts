import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  permission: {
    type: String,
    required: true,
  },
});

const PermissionModel = mongoose.model("Permission", permissionSchema);
export default PermissionModel;
