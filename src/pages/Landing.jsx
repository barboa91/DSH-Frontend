import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TimeStatus from "../components/TimeStatus";
import Sessions from "../components/Sessions";
import "../style/landingpage.css";
import RecentNotification from "../components/RecentNotification";
import RecentConversation from "../components/RecentConversations";
import TeachingStatus from "../components/TeachingStatus";
import { useNavigate } from "react-router-dom";

const Landing = () => {


  const navigate = useNavigate()


  return (
    <>
      <Header />
      <div className="landingpage-container">
        <div className="spacer"></div>
        <div className="timestatus">
          <TimeStatus />
        </div>
        <div className="sessions" onClick={()=>{navigate('/calendar')}}>
          <Sessions />
        </div>
      </div>
      <div className="notifications">
        <RecentNotification />
      </div>
      <div className="conversations">
        <RecentConversation />
      </div>
      <div className="teachingstatus">
        <TeachingStatus />
      </div>

      <NavBar />
    </>
  );
};

export default Landing;
