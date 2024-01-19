import styles from "./Analytics.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Analytics = () => {

    return (
      <div className={styles.main_container}>
        <Sidebar click="analytics" />
        <div className={styles.analytics_container}>
          <h1 className={styles.h1_tag}>Quiz Analysis</h1>
          <div className={styles.quiztable_container}>
            <table>
              <tr>
                <th>S.No</th>
                <th>Quiz Name</th>
                <th>Created On</th>
                <th>Impression</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>Quiz 1</td>
                <td>11 Nov, 2023</td>
                <td>345</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Quiz 2</td>
                <td>11 Nov, 2023</td>
                <td>600</td>
                <span>
                  <td>ed</td>
                  <td>del</td>
                  <td>sh</td>
                </span>
                <td>
                  <Link to="/quizanalysis">Question Wise Analysis</Link>
                </td>
              
            </tr>
                        
            </table>
          </div>
        </div>
      </div>
    );
}

export default Analytics;