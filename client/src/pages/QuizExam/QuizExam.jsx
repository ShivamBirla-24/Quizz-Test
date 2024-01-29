import { useEffect, useState } from "react";
import styles from "./QuizExam.module.css";
import { useParams } from "react-router-dom";
import axios from "axios"

export const QuizExam = () => {
  const { id } = useParams();
  const [quizId, setquizId] = useState(null);
  const [quizData, setquizData] = useState({});
  const [currentQuestionindex, setcurrentQuestionindex] = useState(0);
  const [Questions, setQuestions] = useState([]);
  const [selectedOptionIndex, setselectedOptionIndex] = useState(null);
  
  useEffect(() => {
    if (id) {
      setquizId(id);
      (async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/quiz/getaquiz/${id}`
          );
          setquizData(response.data);
          setQuestions(response.data.questions);
        } catch (error) {
          console.log(error);
        }
      })();

      (async () => {
        try {
          await axios.patch(`http://localhost:3000/api/quiz/impression/${id}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [id])

  const handleNextQuestion = async () => {
    if (quizData.quiztype == "Q&A") {
      if (selectedOptionIndex == Questions[currentQuestionindex].correctoptionindex) {
        const newquestions = [...Questions];
        newquestions[currentQuestionindex].attempt = Questions[currentQuestionindex].attempt + 1;
        newquestions[currentQuestionindex].correct = Questions[currentQuestionindex].correct + 1;
        await setQuestions(newquestions)
      } else {
        const newquestion = [...Questions];
        newquestion[currentQuestionindex].attempt = Questions[currentQuestionindex].attempt + 1;
        await setQuestions(newquestion)
      }
    }

    if (quizData.quiztype == "Poll") {
      if (selectedOptionIndex==0 || selectedOptionIndex) {
        const newquestions = [...Questions];
        newquestions[currentQuestionindex].options[selectedOptionIndex].count =
          Questions[currentQuestionindex].options[selectedOptionIndex].count +
          1;
        await setQuestions(newquestions);
      }
    }

    try {
      await axios.patch(
        `http://localhost:3000/api/quiz/result/${quizId}`,
        Questions
      );
    } catch (error) {
      console.log(error);
    }
  

    if(currentQuestionindex < Questions.length - 1){
      setcurrentQuestionindex((prev) => prev + 1);
    }
    setselectedOptionIndex(null);
  }

  const handleOptionSelected = (e) => {
    const { id } = e.target;
    setselectedOptionIndex(id);
  }
  
  return (
    <div className={styles.main_container}>
      {
        <div className={styles.quiz_container}>
          <div className={styles.header_container}>
            <p style={{ color: "black" }}>
              0{currentQuestionindex + 1}/0{Questions?.length}
            </p>
            <p style={{ color: "red" }}>10 sec</p>
          </div>

          <div className={styles.question_container}>
            <h2>{Questions[currentQuestionindex]?.questiontext}</h2>
          </div>

          <div className={styles.options_container}>
            {quizData?.optiontype == "text&imgurl" && (
              Questions[currentQuestionindex]?.options?.map((option,index) => {
                return (
                  <div className={`${styles.option_textandimg} ${(selectedOptionIndex==index)&&styles.selected_option}`} key={index} id={index} onClick={handleOptionSelected}>
                    <div id={index}>
                      {option.optionText}
                    </div>
                    <img
                      src={option.optionImage}
                      alt="image"
                      id={index}
                    />
                  </div>
                );
              })
            )}
            {quizData?.optiontype == "text" && (
              Questions[currentQuestionindex]?.options?.map((option, index) => {
                return (
                  <div className={`${styles.option_text} ${(selectedOptionIndex==index)&& styles.selected_option}`} key={index} id={index} onClick={handleOptionSelected}>
                    {option.optionText}
                  </div>
                );
              })
            )}
            {quizData?.optiontype == "imgurl" && (
              Questions[currentQuestionindex]?.options?.map((option, index) => {
                return (
                  <div className={`${styles.option_img} ${(selectedOptionIndex==index)&&styles.selected_option}`} key={index} id={index} onClick={handleOptionSelected}>
                    <img
                      src={option.optionImage}
                      alt="image"
                      id={index}
                    />
                  </div>
                );
              })
            )}
          </div>

          <div className={styles.footer_container}>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        </div>
      }
    </div>
  );
}

export default QuizExam;
