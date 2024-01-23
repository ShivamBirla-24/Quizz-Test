const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questiontext: { type: String, required: true },
  options: [
    {
      optionText: String,
      optionImage: String,
      count: { type: Number, default: 0 },
    },
  ],
  correctoptionindex: { type: Number, required: true },
  correct: { type: Number, default: 0 },
});

module.exports = mongoose.model("question", questionSchema);
