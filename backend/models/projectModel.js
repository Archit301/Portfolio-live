import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // image: {
    //   type: String,
    //   required: true  
    // },
    url: {
      type: String,
      required: true  
    },
    technologies: [{ type: String }],
  });



  export const Project=mongoose.model("Project",projectSchema)