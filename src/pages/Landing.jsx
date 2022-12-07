import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TimeStatus from "../components/TimeStatus";
import Sessions from "../components/Sessions";
import "../style/landingpage.css";

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
      <NavBar />
    </>
  );
};

export default Landing;
