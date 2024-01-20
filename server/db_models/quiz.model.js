const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    quizname: { type: String, required: true },
    impression: { type: Number, default: 0 },
    quiztype: { type: String, enum: ["Q&A", "Poll"], required: true },
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    questions: [
      {
        type: mongoose.Schema.Types.Object,
        ref: "questionSchema",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
