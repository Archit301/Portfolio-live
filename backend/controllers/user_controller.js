import { User } from "../models/userModel.js";


export const createUserProfile = async (req, res) => {
  try {
    const { name, description, email, linkedin, github, otherLinks } = req.body;
    let skills = req.body.skills;

    if (typeof skills === 'string') {
      skills = skills.split(',').map(skill => skill.trim());
    }

    // Use req.file.path if the file exists, else set a default image URL or null
    const profileImage = req.file ? req.file.path : "default_image_url_here"; // Replace with an actual URL if you have one

    const newUser = new User({
      name,
      profileImage,
      description,
      skills,
      email,
      linkedin,
      github,
      otherLinks: JSON.parse(otherLinks || "[]"), // Parse otherLinks if it's a JSON string
    });

    await newUser.save();
    res.status(201).json({ message: "User profile created successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const getUserProfile = async (req, res) => {
    try {
      const profile = await User.findOne();
      res.json(profile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const updateUserProfile = async (req, res) => {
    try {
      const updatedProfile = await User.findOneAndUpdate({}, req.body, { new: true });
      res.json(updatedProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const deleteUserProfile = async (req, res) => {
    try {
      await User.deleteOne();
      res.json({ message: 'Profile deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };