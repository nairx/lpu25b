import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import { authenticate, authorize } from "./auth.js";
import jwt from "jsonwebtoken";
const SECRET = "something";
const Router = express.Router();
import userModel from "./userModel.js";
import { register } from "./userController.js";

Router.post("/register", register);

Router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const userObj = {
          username: existingUser.username,
          email: existingUser.email,
          role: existingUser.role,
        };
        const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
        res.status(200).json({ user: userObj, token });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

Router.get("/showusers", authenticate, authorize("admin"), async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (err) {}
});

Router.patch("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await userModel.findByIdAndUpdate(id, body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

Router.delete("/:id", authenticate, authorize("admin"), async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

Router.get("/:id/profile", authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
});

export default Router;
