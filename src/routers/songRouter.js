const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/', async (req, res) => {
    try {
        const song = await Song.find();
        res.json(song);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
