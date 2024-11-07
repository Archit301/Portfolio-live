import { Api } from "../models/apiModel.js";






export const getAllApis = async (req, res) => {
  try {
    const apis = await Api.aggregate([
      {
        $group: {
          _id: "$projectName", // Group by project name
          apis: { $push: "$$ROOT" } // Push the entire document into the `apis` array
        }
      },
      {
        $project: {
          _id: 0, // Hide the `_id` field
          projectName: "$_id", // Rename `_id` to `projectName`
          apis: 1
        }
      }
    ]);

    if (apis.length === 0) {
      return res.status(404).json({ message: 'No APIs found' });
    }

    res.json(apis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getApiById = async (req, res) => {
  try {
    const api = await Api.findById(req.params.id);
    if (!api) {
      return res.status(404).json({ message: 'API not found' });
    }
    res.json(api);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createApi = async (req, res) => {
  console.log(req.body);  // Log the request body to see the data being sent
  const api = new Api(req.body);
  try {
    const savedApi = await api.save();
    console.log(savedApi);  // Log the saved API object
    res.status(201).json(savedApi);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(400).json({ message: `Error creating API: ${error.message}` });
  }
};

export const updateApi = async (req, res) => {
  try {
    const updatedApi = await Api.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedApi) {
      return res.status(404).json({ message: 'API not found' });
    }
    res.json(updatedApi);
  } catch (error) {
    res.status(400).json({ message: `Error updating API: ${error.message}` });
  }
};

export const deleteApi = async (req, res) => {
  try {
    const deletedApi = await Api.findByIdAndDelete(req.params.id);
    if (!deletedApi) {
      return res.status(404).json({ message: 'API not found' });
    }
    res.json({ message: 'API deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error deleting API: ${error.message}` });
  }
};