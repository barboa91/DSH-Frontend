import { useState } from "react";
import "../style/teachingstatus.css";
import { useState } from "react";
import { useEffect } from "react";

const TeachingStatus = () => {
  //! ------------------------useState---------------------------
  const [statData, setStatData] = useState();

  const getStatData = async () => {
    try {
      const response = await fetc;
    } catch (err) {
      console.log(err);
    }
  };

  //!  ------------------------useEffect---------------------------
  useEffect(() => {}, []);

  return (
    <div className="teachingstat-container">
      <div className="stat">
        {/* number of students */}
        <h1></h1>
        {/* students */}
      </div>
      <div className="stat">
        {/* number hours tutored */}
        <h1></h1>
        {/* hours tutored */}
      </div>
      <div className="stat">
        {/* number of reviews */}
        <h1></h1>
        {/* reviews */}
      </div>
    </div>
  );
};

export default TeachingStatus;
