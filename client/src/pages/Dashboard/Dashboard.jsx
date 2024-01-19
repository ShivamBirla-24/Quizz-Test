import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import styles from './Dashboard.module.css'
import TrendingQuizCard from "../../components/TrendingQuizCard/TrendingQuizCard.jsx";

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <Sidebar click="dashboard" />
      <div className={styles.dashboard_container}>
        <div className={styles.quizdata_container}>
          <div style={{ color: "#FF5D01" }}>
            <h2>12</h2>
            <p>Quiz Created</p>
          </div>
          <div style={{ color: "#60B84B" }}>
            <h2>110</h2>
            <p>Questions Created</p>
          </div>
          <div style={{ color: "#5076FF" }}>
            <h2>1.4K</h2>
            <p>Total Impressions</p>
          </div>
        </div>

        <div className={styles.trending_container}>
          <h1>Trending Quizs</h1>
          <div className={styles.displaycards_container}>
            <TrendingQuizCard />
            <TrendingQuizCard />
            <TrendingQuizCard />
            <TrendingQuizCard />
            <TrendingQuizCard />
            <TrendingQuizCard />
            <TrendingQuizCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;