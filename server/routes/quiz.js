const express = require("express");
const isLoggedin = require("../middlewares/requireauth");
const router = express.Router();
const quizSchema = require("../db_models/quiz.model");
const questionSchema = require("../db_models/question.model");

//api for creating the quiz
router.post("/createquiz", isLoggedin, async (req, res) => {
  const { quizname, quiztype, userId, questions } = req.body;

  try {
    if (!quizname || !quiztype || !userId || !questions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newquiz = await new quizSchema({
      quizname,
      quiztype,
      createdby: userId,
    });

    if (questions) {
      for (const question of questions) {
        const newquestion = await new questionSchema({
          questiontext: question.questiontext,
          options: question.options,
          timer: question.timer,
        });
        await newquestion.save();
        newquiz.questions.push(newquestion);
      }
    }

    await newquiz.save();

    return res.status(200).json({
      message: "Quiz created successfully",
      newquiz,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


//api for getting all the quizzes user made
router.get("/getallquizzes", isLoggedin, async (req, res) => {
    const { userId } = req.body;
    const allQuizzes = await quizSchema.find({ createdby: userId });
    if (!allQuizzes) {
        return res.status(404).json({message:"Create Quizzes First"})
    }
    return res.send(allQuizzes);
})



module.exports = router;
