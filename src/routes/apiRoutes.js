const express = require('express');
const router = express.Router();

// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');

// ANYONE can get dishes


// ONLY Admins and Managers can create dishes


const { 
    getAllDishes, 
    createDish, 
    getDishById, 
    updateDish, 
    deleteDish 
} = require('../controllers/dishController');
const {
    getAllChefs,
    createChef,
    getChefById,
    updateChef,
    deleteChef
} = require('../controllers/chefController');

// Define Routes for the Restaurant App

// Dish Routes
router.get('/dishes', getAllDishes);
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

// Chef Routes
router.get('/chef', getAllChefs);
router.post('/chef', createChef);
router.get('/chef/:id', getChefById);
router.put('/chef/:id', updateChef);
router.delete('/chef/:id', deleteChef);

module.exports = router;