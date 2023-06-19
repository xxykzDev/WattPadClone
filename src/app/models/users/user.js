const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
        required: true,
      },
      biography: {
        type: String,
        required: true,
      },
});

const User = mongoose.model('Usuario', userSchema);

module.exports = User;