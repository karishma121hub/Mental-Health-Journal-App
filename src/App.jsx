import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import MoodTracker from "./pages/MoodTracker/MoodTracker";
import Therapists from "./pages/Therapists/Therapists";
import WellnessHub from "./pages/WellnessHub/WellnessHub";
import Insights from "./pages/Insights/Insights";
import Breathing from "./pages/Breathing/Breathing";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Routes>
    
      <Route path="/moodtracker" element={<MoodTracker />} />
      <Route path="/" element={<Login />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/therapists" element={<Therapists />} />
      <Route path="/wellnesshub" element={<WellnessHub/>}/>
      <Route path="/insights" element={<Insights/>}/>
      <Route path="/breathing" element={<Breathing/>}/>
      <Route path="/setting" element={<Settings/>}/>

    </Routes>
  );
}

export default App;