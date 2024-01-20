import { useNavigate } from "react-router-dom";
import styles from "./Createquizpopup.module.css";
import PropTypes from "prop-types";

const Createquizpopup = ({quizData,setquizData}) => {
  
  const navigate = useNavigate();

  const handlePopupdiv = (e) => {
      e.stopPropagation()
  }
  
  const handleCancel = () => {
       navigate("/dashboard") 
  }

  return (
    <div className={styles.main_container} onClick={handlePopupdiv}>
      <input
        type="text"
        name="quizname"
        className={styles.quizname_inputbox}
        placeholder="Quiz Name"
      />
      <div className={styles.quiztype_div}>
        <label htmlFor="quiztype">Quiz Type</label>
        <button id="quiztype" name="quiztype" value="Q&A">
          Q&A
        </button>
        <button id="quiztype" name="quitype" value="Poll">
          Poll Type
        </button>
      </div>
      <div className={styles.button_div}>
        <button style={{ boxShadow: "0 0 3px 1px gray" }} onClick={handleCancel}>Cancel</button>
        <button style={{ backgroundColor: "#60B84B", color:"white"}}>Continue</button>
      </div>
    </div>
  );
}

Createquizpopup.propTypes = {
    quizData: PropTypes.object.isRequired,
    setquizData: PropTypes.func.isRequired
};


export default Createquizpopup;