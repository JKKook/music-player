import mongoose from 'mongoose';

// Define Schemes
const songSchema = new mongoose.Schema({
    name: String,
    artist: String,
    listeners: String,
    image: Array,
});

// Create Model
const Song = mongoose.model('Song', songSchema);

export default Song;
