import "../style/session.css";

const Sessions = () => {
  return (
    <div className="session-container">
      <p className="session-header">Upcoming Sessions</p>
      <div className="fakelist">
        <div className="circle"></div>
        <p>Will Beyers</p>
      </div>
      <div className="time">
        <div className="pTime">Today @3:30pm</div>
      </div>
      <hr />
      <div className="fakelist">
        <div className="circle"></div>
        <p>El Elven</p>
      </div>
      <div className="time">
        <div className="pTime">Today @4:30pm</div>
      </div>
      <hr />
      <div className="fakelist">
        <div className="circle"></div>
        <p>Mike Wheeler</p>
      </div>
      <div className="time">
        <div className="pTime">Today @5:30pm</div>
      </div>
      <hr />
    </div>
  );
};

export default Sessions;
