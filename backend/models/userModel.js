import mongoose from "mongoose";

const userProfileSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      profileImage: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      skills: [{
        type: String  
      }],
      email: {
        type: String,
        required: true
      },
      linkedin: String,
      github: String,
      otherLinks: [
        {
          name: String,
          url: String
        }
      ]
})

export const User =mongoose.model("User",userProfileSchema)