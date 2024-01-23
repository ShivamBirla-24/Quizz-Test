import styles from "./Analytics.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Deletepopup from "../../components/Deletepopup/Deletepopup.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDate from "../../utils.functions/date";
import editicon from "../../images/edit.svg";
import deleteicon from "../../images/delete.svg";
import shareicon from "../../images/share.svg";

const Analytics = () => {
  const [allQuizzes, setallQuizzes] = useState([]);
  const [deleteId, setdeleteId] = useState("");
  const [deletequizPopup, setdeletequizPopup] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/quiz/getallquizzes",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              token,
            },
          }
        );
        setallQuizzes(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [allQuizzes, token]);

  const handleEdit = (e) => {
    console.log(e.target.id);
  }

  const handleDelete = async (e) => {
    setdeletequizPopup(true);
    setdeleteId(e.target.id)
  }

  const handleShare = (e) => {
    console.log(e.target.id);
  }


  return (
    <>
      <div className={styles.main_container}>
        <Sidebar click="analytics" />
        <div className={styles.analytics_container}>
          <h1 className={styles.h1_tag}>Quiz Analysis</h1>
          <div className={styles.quiztable_container}>
            <table>
              {allQuizzes.length && (
                <tr>
                  <th>S.No</th>
                  <th>Quiz Name</th>
                  <th>Created On</th>
                  <th>Impression</th>
                  <th></th>
                  <th></th>
                </tr>
              )}
              {allQuizzes.map((quiz, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{quiz.quizname}</td>
                    <td>
                      {" " +
                        formatDate(
                          quiz.createdAt
                            .toString()
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")
                        )}
                    </td>
                    <td>{quiz.impression}</td>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <td>
                        <img
                          src={editicon}
                          alt="edit"
                          id={quiz._id}
                          style={{ cursor: "pointer" }}
                          onClick={handleEdit}
                        />
                      </td>
                      <td>
                        <img
                          src={deleteicon}
                          alt="delete"
                          id={quiz._id}
                          style={{ cursor: "pointer" }}
                          onClick={handleDelete}
                        />
                      </td>
                      <td>
                        <img
                          src={shareicon}
                          alt="share"
                          id={quiz._id}
                          style={{ cursor: "pointer" }}
                          onClick={handleShare}
                        />
                      </td>
                    </span>
                    <td>
                      <Link to="/quizanalysis">Question Wise Analysis</Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        {deletequizPopup && (
          <Deletepopup
            deleteId={deleteId}
            setdeletequizPopup={setdeletequizPopup}
          />
        )}
      </div>
    </>
  );
};

export default Analytics;
