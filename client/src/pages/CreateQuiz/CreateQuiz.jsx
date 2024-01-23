import styles from "./CreateQuiz.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Createquizpopup from "../../components/Createquizpopup/Createquizpopup.jsx";
import QuestionsPopup from "../../components/QuestionsPopup/QuestionsPopup.jsx";
import SharePopup  from "../../components/SharePopup/SharePopup.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import QuizContextProvider from "../../context/createquizcontext/QuizContextProvider.jsx";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [createquizPopup, setcreatequizPopup] = useState();
  const [createquestionsPopup, setcreatequestionsPopup] = useState();
  const [sharePopup, setsharePopup] = useState(false);
  const edit = false;
  
  useEffect(() => {
    if (edit) {
      setcreatequizPopup(false);
      setcreatequestionsPopup(true);
    } else {
      setcreatequizPopup(true);
      setcreatequestionsPopup(false);
    }

  },[edit])

  const handleOutsidePopup = () => {
    setcreatequizPopup(true);
    setcreatequestionsPopup(false);
    navigate("/dashboard");
  };

  return (
    <div className={styles.main_container} onClick={handleOutsidePopup}>
      <Sidebar click="createquiz" />
      <QuizContextProvider>
        {createquizPopup &&
          <Createquizpopup
            setcreatequizPopup={setcreatequizPopup}
            setcreatequestionsPopup={setcreatequestionsPopup}
          />}

        {createquestionsPopup && <QuestionsPopup setsharePopup={setsharePopup} setcreatequestionsPopup={setcreatequestionsPopup} setcreatequizPopup={setcreatequizPopup} />}

        {sharePopup && <SharePopup/>}
      </QuizContextProvider>
    </div>
  );
};

export default CreateQuiz;
