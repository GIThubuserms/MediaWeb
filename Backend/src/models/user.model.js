import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Userschema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

Userschema.pre("save", async function () {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

Userschema.methods.verifypassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

Userschema.method.generaterefreshToken = function () {
  return jwt.sign(
    {
      username: this.username,
      email: this.username,
      avatar: this.avatar,
    },
    1234,
    { expiresIn: "5d" }
  );
};

export const User = mongoose.model("User", Userschema);
