import User from '../models/User.models.js';

export const createUser = async (req, res) => {
    const { data } = req.body;
    
    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid data format"
        });
    }

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item)).map(item => item.toString());
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item)).map(item => item.toUpperCase());

    // Find the highest alphabet
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    try {
        res.json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highestAlphabet
        });
    } catch (err) {
        res.status(500).json({
            is_success: false,
            message: err.message
        });
    }
};


export const getOperationCode = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};
