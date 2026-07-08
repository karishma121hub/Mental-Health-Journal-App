import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import MoodCard from "../../components/Cards/MoodCard";
import QuoteCard from "../../components/Cards/QuoteCard";
import StreakCard from "../../components/Cards/StreakCard";
import MoodOverviewCard from "../../components/Cards/MoodOverviewCard";
import CalendarCard from "../../components/Cards/CalendarCard";
import DailyPromptCard from "../../components/Cards/DailyPromptCard";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* First Row */}
        <div className="cards-row">
          <MoodCard />
          <QuoteCard />
          <StreakCard />
        </div>

        {/* Second Row */}
        <div className="cards-row">
          <MoodOverviewCard />
          <CalendarCard />
          <DailyPromptCard />
        </div>
      </div>
    </div>
  );
}

export default Home;