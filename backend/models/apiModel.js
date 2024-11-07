import mongoose from "mongoose";


const apiSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true, // The name of the project
  },
  name: {
    type: String,
    required: true, // Name of the API (e.g., "User Authentication and Management API")
  },
  description: {
    type: String,
    required: true, // A detailed description of what the API does
  },
  baseUrl: {
    type: String,
    required: true, // Base URL of the API (e.g., 'https://blog-backend-w5my.onrender.com')
  },
  documentationUrl: {
    type: String,
    required: false, // Optional URL pointing to full documentation for the API
  },
  endpoints: [
    {
      method: {
        type: String,
        enum: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP method (GET, POST, etc.)
        required: true, // HTTP method for the endpoint
      },
      path: {
        type: String,
        required: true, // Path of the endpoint (e.g., '/backend/auth/signin')
      },
      description: {
        type: String,
        required: true, // A detailed description of what the endpoint does
      },
      statusCode: {
        type: Number, // HTTP status code returned by the endpoint (e.g., 200, 201)
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp for when the API entry was created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Timestamp for when the API entry was last updated
  },
});

export const Api=mongoose.model("Api",apiSchema)


  
