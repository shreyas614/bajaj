import express from 'express';
import { createUser, getOperationCode } from '../controllers/userController.js';

const router = express.Router();

// POST request to create a user
router.post('/', createUser);

// GET request to retrieve operation code
router.get('/', getOperationCode);

export default router;
