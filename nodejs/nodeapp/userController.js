import bcrypt from "bcrypt"
import userModel from "./userModel.js";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      password: hashedpwd,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export {register}
