import styles from "./TrendingQuizCard.module.css";
import eyeImage from "../../images/eye.svg";

const TrendingQuizCard = () => {
  return (
    <div className={styles.main_container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "x-large", fontWeight: "600" }}>Quiz1</span>
        <span style={{ color: "#FF5D01" , display:"flex" , alignItems:"center",gap:"3px", fontSize:"small"}}>
          667 <img src={eyeImage} alt="eye icon" />
        </span>
      </div>
      <div>
        <span style={{ fontSize: "small", color: "#60B84B" }}>
          Created on : 04 Sep, 2023
        </span>
      </div>
    </div>
  );
}

export default TrendingQuizCard;