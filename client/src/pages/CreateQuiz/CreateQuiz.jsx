import styles from "./CreateQuiz.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Createquizpopup from "../../components/Createquizpopup/Createquizpopup.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [createquizPopup, setcreatequizPopup] = useState(true);
  const [quizData, setquizData] = useState({});

  const [createquestionsPopup, setcreatequestionsPopup] = useState(false);

  const handleOutsidePopup = () => {
    setcreatequizPopup(true);
    setcreatequestionsPopup(false);
    navigate("/dashboard");
  };

  return (
    <div className={styles.main_container} onClick={handleOutsidePopup}>
      <Sidebar click="createquiz" />
      {createquizPopup ? (
        <Createquizpopup quizData={quizData} setquizData={setquizData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateQuiz;
