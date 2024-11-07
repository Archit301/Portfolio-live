import mongoose from "mongoose";
const technologySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: String,
    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }]
  });

  
  export const Technology=mongoose.model("Technology",technologySchema)