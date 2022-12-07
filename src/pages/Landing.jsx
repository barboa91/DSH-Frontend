import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TimeStatus from "../components/TimeStatus";
import Sessions from "../components/Sessions";

const Landing = () => {
  return (
    <>
      <Header />
      <TimeStatus />
      <Sessions />
      <NavBar />
    </>
  );
};

export default Landing;
