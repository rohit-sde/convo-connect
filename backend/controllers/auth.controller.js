import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // console.log("Hi I have signed up");

    const { fullName, username, password, confirmPassword, gender } = req.body;
    // console.log("fullName", fullName);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password

    const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);

    // for profile picture of user
    // https://avatar-placeholer.iran.liara.run

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      console.log("1");
      // generate jwt token
      generateTokenAndSetCookie(newUser._id, res);
      console.log("2");
      await newUser.save();
      console.log("3");

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
      console.log("4");
    } else {
      res.status(400).json({ error: "Invaild user data" });
    }
  } catch (e) {
    console.log("Error in signup controller", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user) {
      res.status(400).json({ error: "Invalid username" });
      return next();
    } else if (!isPasswordCorrect) {
      res.status(400).json({ error: "Invalid password" });
      return next();
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });

    // console.log("User logged in");
  } catch (e) {
    console.log("Error in login controller", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (e) {
    console.log("Error in logout controller", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
