const Chef = require('../models/chefModel');

// 1. GET ALL CHEFS
const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE A NEW CHEF
const createChef = async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. GET CHEF BY ID
const getChefById = async (req, res) => {
    try {
        const chef = await Chef.findById(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE CHEF
const updateChef = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. DELETE CHEF
const deleteChef = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndDelete(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json({ message: 'Chef deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllChefs,
    createChef,
    getChefById,
    updateChef,
    deleteChef
};
