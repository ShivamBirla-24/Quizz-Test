const express = require("express");
const isLoggedin = require("../middlewares/requireauth");
const router = express.Router();
const quizSchema = require("../db_models/quiz.model");
const questionSchema = require("../db_models/question.model");

//api for creating the quiz
router.post("/createquiz", isLoggedin, async (req, res) => {
  const { quizname, quiztype, createdby, questions } = req.body;

  try {
    if (!quizname || !quiztype || !questions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newquiz = await new quizSchema({
      quizname,
      quiztype,
      createdby,
    });

    if (questions) {
      for (const question of questions) {
        const newquestion = await new questionSchema({
          questiontext: question.questiontext,
          options: question.options,
          timer: question.timer,
        });
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

//api for getting trending quizzes
router.get("/trendingquizzes", isLoggedin, async (req, res) => {
  try {
      const { createdby } = req.body;

     const trendingQuizzes = await quizSchema.find({ createdby, impression: { $gte: 10 } }).sort({ impression: -1 });

  if (!trendingQuizzes) {
    return res.status(404).json({ message: "No trending quizzes" });
  }
  return res.send(trendingQuizzes);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
  }
});


//api for get all quizzes data
router.get("/getallquizzes", isLoggedin, async (req, res) => {
  try {
    const { createdby } = req.body;

  const allQuizzes = await quizSchema.find({ createdby });
  if (!allQuizzes) {
    return res.status(404).json({ message: "Create Quiz Please" });
  }
  return res.send(allQuizzes);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
  }
})

//api for deleting a quiz
router.delete("/delete/:id", isLoggedin, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
  if(!id){
    return res.status(404).json({
      message:"No quiz found"
    })
  }
  const deletedUser = await quizSchema.findByIdAndDelete(id);
  return res.status(200).json({
    message: "Quiz deleted successfully",
    deletedUser
  })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"Internal Server Error"
    })
  }
})

module.exports = router;
