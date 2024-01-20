import styles from "./QuizAnalysis.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import QuizAnalysisPoll from "../../components/QuizAnalysisPoll/QuizAnalysisPoll.jsx";
import QuizAnalysisQA from "../../components/QuizAnalysisQA/QuizAnalysisQA.jsx";

const QuizAnalysis = () => {
  const quizType = "Poll";

  return (
    <div className={styles.main_container}>
      <Sidebar click="analytics" />
      {quizType == "Poll" ? <QuizAnalysisPoll /> : ""}
      {quizType == "Q&A" ? <QuizAnalysisQA/> : ""}
    </div>
  );
};

export default QuizAnalysis;
