import styles from "./QuizAnalysisPoll.module.css";

const QuizAnalysisPoll = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.quizname_heading_container}>
        <h1>Quiz 2 Question Analysis</h1>
        <div>
          <p>Created on:04 Sep,2023</p>
          <p>Impressions:667</p>
        </div>
      </div>
      <div className={styles.questions_container}>
        <div className={styles.question_div}>
          <h2>Q.1 Question place holder for analysis ? </h2>
          <div className={styles.options_container}>
            <div>
              <h1>60</h1>
              <p>Option 1</p>
            </div>
            <div>
              <h1>38</h1>
              <p>Option 2</p>
            </div>
            <div>
              <h1>22</h1>
              <p>Option 3</p>
            </div>
            <div>
              <h1>50</h1>
              <p>Option 4</p>
            </div>
          </div>
          <hr style={{ border: "1px solid #D7D7D7" }} />
        </div>
      </div>
    </div>
  );
}

export default QuizAnalysisPoll;