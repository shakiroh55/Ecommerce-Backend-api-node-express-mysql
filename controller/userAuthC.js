const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userM");
require("dotenv").config();

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.createUser(name, email, hashedPassword);
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const [rows] = await userModel.findUserByEmail(email);
    if (rows.length === 0)
      return res.status(401).json({ message: "Invalid email" });
    const user = rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Wrong password" });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({success: true, success: true, status: 200, message: "login successfully", token});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { register, login };
