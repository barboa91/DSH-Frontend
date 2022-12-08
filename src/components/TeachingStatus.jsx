import { useState, useEffect, useContext } from "react";
import { DataContext } from "../components/DataContext";
import "../style/teachingstatus.css";

const DB_URL = "https://dsh-backend.fly.dev";

const TeachingStatus = () => {
  //! ------------------------useContext---------------------------
  const { currentUser } = useContext(DataContext);

  //! ------------------------useState---------------------------
  const [statData, setStatData] = useState();

  const getStatData = async () => {
    try {
      const response = await fetch(`${DB_URL}/user/${currentUser.user._id}`);
      const data = await response.json();
      setStatData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="teachingstat-container">
      <div className="stat">
        {/* number of students */}
        <h1>5</h1>
        {console.log(statData)}
        {/* students */}
        <p>Students</p>
      </div>
      <div className="stat">
        {/* number hours tutored */}
        <h1>146</h1>
        {/* hours tutored */}
        <p>Hours Tutored</p>
      </div>
      <div className="stat">
        {/* number of reviews */}
        <h1>15</h1>
        {/* reviews */}
        <p>Reviews</p>
      </div>
    </div>
  );
};

export default TeachingStatus;
