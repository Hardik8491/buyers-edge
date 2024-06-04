import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,

    unique: true,
  },
  lastName: {
    type: String,

    unique: true,
  },
  email: {
    type: String,

    unique: true,
  },
  password: {
    type: String,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  // forgotPasswordToken: String,
  // forgotPasswordTokenExpiry: Date,
  // verifyToken: String,
  // verifyTokenExpiry: Date,
},
{ timestamps: true }
);

const User = models.users || mongoose.model("users", userSchema);

export default User;
