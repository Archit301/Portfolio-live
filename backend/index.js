import express from  "express"
import mongoose from "mongoose";
import cors from "cors"
import  userProfileRoutes from "./routes/user_route.js"
import projectRoutes from "./routes/project_route.js"
import technologyRoutes from "./routes/technology_route.js"
import apiRoutes from "./routes/api_route.js"
import path from"path"
const app = express();
app.use(express.json());
app.use(cors())


app.use('/api/profile', userProfileRoutes);   
app.use('/api/projects', projectRoutes);       
app.use('/api/technologies', technologyRoutes); 
app.use('/api/apis', apiRoutes);  
const MONGO="mongodb+srv://tambiarchit:7297898025@cluster0.r982o.mongodb.net/"

mongoose
   .connect(MONGO)
   .then(()=>{
console.log("Connected to MongoDB!");
})
.catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})