import { Project } from "../models/projectModel.js";



export const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find().populate('technologies');
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const getProjectById = async (req, res) => {
    try {
      const project = await Project.findById(req.params.id).populate('technologies');
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const createProject = async (req, res) => {
    const project = new Project(req.body);
    try {
      const savedProject = await project.save();
      res.status(201).json(savedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  export const updateProject = async (req, res) => {
    try {
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  export const deleteProject = async (req, res) => {
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.json({ message: 'Project deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  