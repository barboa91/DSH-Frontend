import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TimeStatus from "../components/TimeStatus";
import Sessions from "../components/Sessions";
import "../style/landingpage.css";
import RecentNotification from "../components/RecentNotification";
import RecentConversation from "../components/RecentConversations";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="landingpage-container">
        <div className="spacer"></div>
        <div className="timestatus">
          <TimeStatus />
        </div>
        <div className="sessions">
          <Sessions />
        </div>
      </div>
      <div className="notifications">
        <RecentNotification />
      </div>
      <div className="conversations">
        <RecentConversation />
      </div>
      <NavBar />
    </>
  );
};

export default Landing;
