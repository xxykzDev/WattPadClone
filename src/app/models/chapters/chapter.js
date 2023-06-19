const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Historia',
    required: true,
  },
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;