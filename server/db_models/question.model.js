const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questiontext: { type: String, required: true },
  options: [
    {
      optionText: String,
      optionImage: String,
      isCorrect: Boolean,
      count: Number,
    },
  ],
  selectedOption: { type: String },
  timer: { type: Number, default: 0 },
  correct: { type: Number, default: 0 },
  incorrect: { type: Number, default: 0 },
});

module.exports = mongoose.model("questionSchema", questionSchema);
