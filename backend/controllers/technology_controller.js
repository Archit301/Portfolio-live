import { Technology } from "../models/techmodel.js";



export const getAllTechnologies = async (req, res) => {
    try {
      const technologies = await Technology.find();
      res.json(technologies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
 
  export const getTechnologyById = async (req, res) => {
    try {
      const technology = await Technology.findById(req.params.id);
      res.json(technology);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const createTechnology = async (req, res) => {
    const technology = new Technology(req.body);
    try {
      const savedTechnology = await technology.save();
      res.status(201).json(savedTechnology);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

  export const updateTechnology = async (req, res) => {
    try {
      const updatedTechnology = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedTechnology);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
 
  export const deleteTechnology = async (req, res) => {
    try {
      await Technology.findByIdAndDelete(req.params.id);
      res.json({ message: 'Technology deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };